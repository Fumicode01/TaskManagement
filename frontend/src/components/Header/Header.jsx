import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux'
import {getIsSignedIn} from "../../redux/users/selectors";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/img/logo1.png'
import { push } from 'connected-react-router'
import HeaderMenus from './HeaderMenu';

const useStyles = makeStyles({
    root:{
        flexGrow:1,
    },
    menuBar:{
        backgroundColor:"#fff",
        color: "#444",
    },
    toolBar:{
        margin: '0 auto',
        maxWidth: 1024,
        width: '100%'
    },
    iconButtons:{
        margin: '0 0 0 auto'
    }

})

const Header = () => {
    const classes = useStyles();
    const selector = useSelector(state => state)
    const dispatch = useDispatch();
    const isSignedIn = getIsSignedIn(selector)

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menuBar}>
                <Toolbar className={classes.toolBar}>
                    <img src={logo} alt="Logo" width="140px" onClick={() => dispatch(push('/'))} />
                    {/* {isSignedIn && ( */}
                        <div className={classes.iconButtons}>
                            <HeaderMenus />
                        </div>
                    {/* )} */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
