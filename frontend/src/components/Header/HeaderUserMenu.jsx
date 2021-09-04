import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import LoginDialog from '../Uikit/LoginDialog'
import SignupDialog from '../Uikit/SignupDialog'




const HeaderUserMenu = () => {

    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);

    const handleLoginOpen = () => {
        setOpenLogin(true);
    };
    const handleSignupOpen = () => {
        setOpenSignup(true);
    };

    const handleLoginClose = () => {
        setOpenLogin(false);
    };
    const handleSignupClose = () => {
        setOpenSignup(false);
    };
    return (
        <>
            <IconButton onClick={handleLoginOpen}>
                Login
            </IconButton>
            <IconButton onClick={handleSignupOpen}>
                Signup
            </IconButton>
            <LoginDialog open={openLogin} handleClose={handleLoginClose} />
            <SignupDialog open={openSignup} handleClose={handleSignupClose} />

        </>
    )
}

export default HeaderUserMenu
