import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { 
    VoidFuncType,
    LoginComponentProps
} from '../types'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    link: {
        cursor: 'pointer'
    } 
}))

export default function Login (props: LoginComponentProps) {


    const { axios } = props

    const classes = useStyles();

    const [pageStatus,setPageStatus] = useState(0)
    const [userInfo, setUserInfo] = useState({
        mobile: '',
        password: '',
        email: ''
    });

    const handleClick: VoidFuncType = () => {
        setUserInfo({
            mobile: '',
            password: '',
            email: ''
        })
        setPageStatus(pageStatus === 0 ? 1 : 0)
    }

    const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        }) 
    }

    const handleSubmit:() => void  = () => {
        if (pageStatus === 0) {
            const { mobile, password } = userInfo
            axios.login({mobile, password})
        } else {
            axios.register(userInfo)
        }
    }


    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    M
                </Avatar>
                <Typography component="h1" variant="h5">
                    {pageStatus ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Mobile"
                        name="mobile"
                        autoFocus
                        onChange={handleChange}
                        value={userInfo.mobile}
                    />
                    {
                        pageStatus ? (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                name="email"
                                required
                                fullWidth
                                label="Email"
                                onChange={handleChange}
                                value={userInfo.email}
                            />
                        ) : null 
                    }
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleChange}
                        value={userInfo.password}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        {pageStatus ? 'Sign Up' : 'Sign In'} 
                    </Button>
                    <Grid
                        container
                        justify="flex-end"
                    >
                        <Grid item>
                            <Link
                                className={classes.link}
                                onClick={handleClick}
                            >
                                {pageStatus ? 'Already have an account?' : "Don't have an account ?"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
