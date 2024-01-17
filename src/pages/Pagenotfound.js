import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom';  // If using React Router
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Pagenotfound = () => {
    return (
        <Layout>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <ErrorOutlineIcon sx={{ fontSize: '4rem', color: 'error.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                    Oops! Page Not Found
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary" paragraph>
                    The page you are looking for might be under construction or does not exist.
                </Typography>
                <Button
                    component={Link}  // If using React Router, otherwise use 'a' tag or other routing method
                    to="/"
                    variant="contained"
                    color="primary"
                >
                    Go to Home
                </Button>
            </Container>
        </Layout>
    )
}

export default Pagenotfound;
