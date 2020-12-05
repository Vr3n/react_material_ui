import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AcUnitRounded } from '@material-ui/icons'
import React from 'react'

const useStyle = makeStyles({
    title: {
        flexGrow: 1,
    },
});

const Header = () => {
    const classes = useStyle();


    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography className={classes.title}>
                    This is our header..
                </Typography>

                <AcUnitRounded />
            </Toolbar>
        </AppBar>
    )
}

export default Header;