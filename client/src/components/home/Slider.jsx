import { Box, Button, Divider, makeStyles, Typography } from '@material-ui/core'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 12,
        background: '#FFFFFF',
    },
    deal: {
        padding: '15px 20px',
        display: 'flex',
    },
    dealText: {
        fonSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25,
    },
    timer: {
        display: 'flex',
        alignItems: 'center',
        color: '#7f7f7f',
        marginLeft: 10,
    },
    image: {
        height: 150,
    },
    button: {
        marginLeft: 'auto',
        background: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    text: {
        marginTop: 5,
        fontSize: 14,
    },
    wrapper: {
        padding: '35px 13px',
    },
    timerr: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
}))

const Slider = ({ timer, title, products }) => {
    const classes = useStyle()
    const renderer = ({ hours, minutes, seconds }) => {
        // Render a countdown
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>;
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    timer &&
                    <Box className={classes.timerr}>
                        <img style={{ width: 24 }} src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' />
                        <Countdown date={Date.now() + 5.04e+07} renderer={renderer} />
                    </Box>
                }
                <Button variant='contained' color='primary' className={classes.button}>View All</Button>
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                centerMode={true}
                showDots={false}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

            >
                {
                    products.map(product => (
                        <Link to={`/product/${product.id}`}>
                            <Box textAlign='center' className={classes.wrapper} >
                                <img src={product.url} className={classes.image} />
                                <Typography className={classes.text} style={{ color: '#212121', fontWeight: 600 }}>{product.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
                                <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel >
        </Box >
    )
}

export default Slider