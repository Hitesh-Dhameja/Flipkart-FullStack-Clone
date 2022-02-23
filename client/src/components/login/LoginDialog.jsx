import { useState } from 'react'
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core';
import { authenticatesignup, authenticateLogin } from '../../services/api';

const useStyle = makeStyles({
    component: {
        width: '90vh',
        height: '70vh',
        maxWidth: 'none',
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600,
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20,
        }
    },
    text: {
        color: '#787878',
        fontSize: 12,
    },
    loginBtn: {
        textTransform: 'none',
        background: '#FB6410',
        color: '#FFFFFF',
        height: 48,
        borderRadius: 2
    },
    requestBtn: {
        textTransform: 'none',
        background: '#FFFFFF',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',

    },
    createtext: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer',
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600,
    }
})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations',
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here!',
        subHeading: 'Signup with your mobile number to get started',
    },
}

const loginInitialValues = {
    username: '',
    password: '',
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}

const LoginDialog = ({ open, setOpen, setAccount }) => {

    const [account, toggleAccount] = useState(initialValue.login)
    const [signup, setSignup] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const [errors, setError] = useState(false)

    const toggleuserAccount = () => {
        toggleAccount(initialValue.signup)
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login)
    }
    const signupUser = async () => {
        let response = await authenticatesignup(signup)
        if (!response) return;
        handleClose()
        setAccount(signup.username)

    }
    const loginUser = async () => {
        let responsed = await authenticateLogin(login)
        if (!responsed) {
            setError(true)
        }
        else {
            setError(false)
            handleClose()
            setAccount(login.username)
        }

    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
        console.log(login)
    }
    const classes = useStyle()
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view == 'login' ?

                            <Box className={classes.login}>
                                <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                                <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                {
                                    errors && <Typography className={classes.error}>Invalid username or password</Typography>
                                }
                                <Typography className={classes.text}>By continuing, you agree to flipkart's terms of Use and Privacy Policy.</Typography>
                                <Button onClick={() => loginUser()} className={classes.loginBtn}>Login</Button>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <Button variant='contained' className={classes.requestBtn}>Request OTP</Button>
                                <Typography onClick={() => toggleuserAccount()} className={classes.createtext}>New to FlipKart? Create an account</Typography>
                            </Box> :
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email-id' />
                                <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Mobile number' />
                                <Button onClick={() => signupUser()} variant='contained' className={classes.loginBtn}>Signup</Button>
                            </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog >
    )
}

export default LoginDialog