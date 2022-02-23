import Search from './Search';
import HeaderButtons from './HeaderButtons';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Box, Typography, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        backgroundColor: '#2874f0',
    },
    logo: {
        width: 75,
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    container: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic',
    },
    subUrl: {
        width: 10,
        height: 10,
        marginLeft: 4,
    }

});

const ToolBar = withStyles({
    root: {
        minHeight: 55,
    }
})(Toolbar);

const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo} alt='logo' />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component='span' style={{ color: '#ffE500' }}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subUrl} alt='plus' />
                    </Box>
                </Link>
                <Search />
                <HeaderButtons />
            </ToolBar>
        </AppBar>
    )
};

export default Header;
