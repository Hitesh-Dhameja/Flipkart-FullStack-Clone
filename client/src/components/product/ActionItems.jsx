import { Box, Button, makeStyles } from '@material-ui/core'
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx'
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 0 0 40px'
        }
    },
    image: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%',
    },
    button: {
        height: 50,
        width: '46%',
        borderRadius: 2,
    },
    addToCart: {
        background: '#ff9f00',
        color: '#fff',
        marginRight: 10,
    },
    buyNow: {
        background: '#ff641b',
        color: '#fff'
    }
}))

const ActionItems = ({ product }) => {
    const classes = useStyle()
    const history = useHistory()
    const dispatch = useDispatch()
    const addItemToCart = () => {
        dispatch(addToCart(product.id))
        history.push('/cart')
    }
    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} alt='x' className={classes.image} /><br />
            <Button onClick={() => addItemToCart()} variant="contained" className={clsx(classes.addToCart, classes.button)}><Cart />Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.buyNow, classes.button)}><Flash />Buy Now</Button>
        </Box>
    )
}

export default ActionItems