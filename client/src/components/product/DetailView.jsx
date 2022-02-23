import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../redux/actions/productsActions'
import { Box, makeStyles, Grid, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core'
import { LocalOffer as Badge, StrikethroughS } from '@material-ui/icons';
import clsx from 'clsx'
import ActionItems from './ActionItems';

const useStyle = makeStyles(theme => ({
  component: {
    marginTop: 55,
    background: '#F2F2F2',
  },
  container: {
    // margin: '0 80px',
    background: '#FFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      margin: 0,
    }
  },
  rightContainer: {
    marginTop: 50,
    '& > *': {
      marginTop: 10,
    }
  },
  smallText: {
    fontSize: 14,
    verticalAlign: 'baseline',
    '& > *': {
      marginTop: 10,
      fontSize: 14,
    }
  },
  greyColorText: {
    color: '#878787',
  },
  price: {
    fontWeight: 600,
    fontSize: 28,
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color: '#00CC00',
  }
}))

const DetailView = ({ match }) => {
  const classes = useStyle()
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
  const { product } = useSelector(state => state.getProductDetails)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductDetails(match.params.id))
  }, [dispatch])
  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length &&
        <Grid container className={classes.container}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>
          <Grid item lg={8} md={12} sm={8} xs={12} className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography className={clsx(classes.smallText, classes.greyColorText)}>
              Ratings & 1 review
              <span><img style={{ width: 77, marginLeft: 20 }} src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' alt='x' /></span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
              <span className={classes.greyColorText}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
            </Typography>
            <Typography style={{ marginTop: 20, fontWeight: 600 }}>Available offers</Typography>
            <Box className={classes.smallText}>
              <Typography><Badge className={classes.badge} />Special PriceGet extra 5% off</Typography>
              <Typography><Badge className={classes.badge} />Combo OfferBuy 3 items save 5%;Buy 4 save 7%;Buy 5+ save 10% See all products</Typography>
              <Typography><Badge className={classes.badge} />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More</Typography>
              <Typography><Badge className={classes.badge} />Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
            </Box>
            <Table>
              <TableBody>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyColorText}>Delivery</TableCell>
                  <TableCell style={{ fontWeight: 600 }}>{date.toDateString()} | ₹40</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyColorText}>Warranty</TableCell>
                  <TableCell>No Warranty</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyColorText}>Seller</TableCell>
                  <TableCell className={classes.smallText}>
                    <span style={{ color: '#2874f0' }}>SuperComNet</span>
                    <Typography>GST Invoice Avaiable</Typography>
                    <Typography>14 Days Return Policy</Typography>
                    <Typography>View more sellers starting from ₹300</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <img style={{ width: 390 }} src='https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50' alt='x' />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyColorText}>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      }
    </Box>
  )
}

export default DetailView