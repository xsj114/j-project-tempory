import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(5),
    },
    title: {
        flexGrow: 1
    }
}));

export default function ButtonAppBar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >
                        Mock Data
                    </Typography>
                    <Button color="inherit">
                        Sign out
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}



