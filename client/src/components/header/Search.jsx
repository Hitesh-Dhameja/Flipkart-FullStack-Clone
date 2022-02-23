import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display: 'flex',
    },
    searchIcon: {
        padding: 5,
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        color: 'blue',
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%',
    },
    inputInput: {
        paddingLeft: 20,
    },
}))

const Search = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search for products, brands and more"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
        </div>
    )
}

export default Search