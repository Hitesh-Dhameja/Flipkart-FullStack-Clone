import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles({
    component: {
        margin: '100px 140px',
        width: '80%',
        background: '#fff',
        height: '71.3vh',
    },
    container: {
        textAlign: 'center',
        paddingTop: 70,
        '& > *': {
            marginTop: 10,
            fontSize: 14,
        }
    },
    image: {
        width: '15%',
    },
    button: {
        marginTop: 20,
        padding: '17px 70px',
        borderRadius: 2,
        fontSize: 14,
        background: '#2874f0',
        color: '#fff'
    }
})

const EmptyCart = () => {
    const classes = useStyle()
    const history = useHistory()
    const addItem = () => {
        history.push('/')
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img className={classes.image} src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='x' />
                <Typography>Your cart is empty!</Typography>
                <Typography>Add Items to it now.</Typography>
                <Button variant='contained' className={classes.button} onClick={() => addItem()}>Shop Now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart