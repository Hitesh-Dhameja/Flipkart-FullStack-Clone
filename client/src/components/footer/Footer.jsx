import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
    foot: {
        margin: '0 auto',
        textAlign: 'center',
        background: '#212121',
        color: '#fff',
    },

})

const Footer = () => {
    const classes = useStyle()
    return (
        <p className={classes.foot}>Made from ❤️ by Hitesh Dhameja &#169; 2022</p>
    )
}

export default Footer