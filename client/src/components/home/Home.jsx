import { useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Navbar from './Navbar'
import Banner from './Banner'
import Slider from './Slider'
import MidSection from './MidSection'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../../redux/actions/productsActions'

const useStyle = makeStyles(theme => ({
    component: {
        padding: 10,
        background: '#F2F2F2',
    },
    leftComponent: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    rightWrapper: {
        background: '#FFFFFF',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '17%',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }
}))

const Home = () => {
    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const classes = useStyle()
    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.leftComponent}>
                        <Slider timer={true} title='Deal of the Day' products={products} />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img style={{ width: 200, height: '100%' }} src='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70' />
                    </Box>
                </Box>
                <MidSection />
                <Slider timer={false} title='Discounts for You' products={products} />
                <Slider timer={false} title='Suggested Items' products={products} />
                <Slider timer={false} title='Top Selection' products={products} />
                <Slider timer={false} title='Recommended Items' products={products} />
                <Slider timer={false} title='BestSellers' products={products} />
            </Box>



        </div>

    )
}

export default Home