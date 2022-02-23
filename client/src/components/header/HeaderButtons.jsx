import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import LoginDialog from '../login/LoginDialog';
import { LoginContext } from '../../context/ContextProvider'
import Profile from './Profile'
import { useSelector } from 'react-redux';


const useStyle = makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#2874F0',
        textTransform: 'unset',
        borderRadius: 2,
        fontWeight: 600,
        padding: '5px 40px',
        boxShadow: 'none',
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            fontSize: 12,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff',
        },
    },
    container: {
        display: 'flex',
    }
})
const HeaderButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const { cartItems } = useSelector(state => state.cart)

    const classes = useStyle()
    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <Link>
                        <Button variant='contained' className={classes.login} onClick={() => handleClickOpen()}>Login</Button>
                    </Link>
            }
            <Link><Typography style={{ marginTop: 5 }}>More</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>

    )
}

export default HeaderButtons