import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar';



const HeaderMenus = () => {
    return (
        <>
            <IconButton>
                <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
                <Avatar src="/broken-image.jpg" />
            </IconButton>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default HeaderMenus
