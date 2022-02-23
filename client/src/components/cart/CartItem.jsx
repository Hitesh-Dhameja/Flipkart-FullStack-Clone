import { Box, Button, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import GroupButtons from './GroupButtons'

const useStyle = makeStyles({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop: '1px solid #f0f0f0'
    },
    leftComponent: {
        margin: 20,
    },
    rightComponent: {
        margin: 20,
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787',
    },
    price: {
        fontWeight: 600,
        fontSize: 18,
    },
    image: {
        height: 110,
        width: 110,
    },
    remove: {
        marginTop: 20,
        fontSize: 16,
    }
})
const CartItem = ({ item, removeItemFromCart }) => {
    const classes = useStyle()

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img className={classes.image} src={item.url} alt='x' />
                <GroupButtons />
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{ marginTop: 10 }}>Seller:SuperComNet
                    <span><img style={{ width: 50, marginLeft: 10 }} src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' alt='x' /></span>
                </Typography>
                <Typography style={{ margin: '20px 0' }}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;
                    <span className={classes.greyColorText}><strike>₹{item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
                </Typography>
                <Button className={classes.remove} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem