import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Styles from '../../styles/FooterStyles.css'
const Footer = () => {
    return (
        <>

            <Box textAlign={'center'}
                bgcolor={'#000'}
                p={'10px'}>
                <Box className="footer-icon" sx={{
                    "& svg": {
                        fontSize: "29px",
                        background: "goldenrod",
                        color: "#000",
                        padding: "5px",
                        margin: "5px 5px 0px 5px",
                        borderRadius: "50%",
                        transition: "all .5s ease-in-out",
                        cursor: "pointer",
                    }, " & svg:hover ": {
                        backgroundColor: "rgb(238, 238, 238)", transform: "translateY(1px)",
                        transition: "all .5s ease-in-out",

                    }
                }}>
                    {/* Icons  */}
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                    <YouTubeIcon />

                </Box>
                <Typography variant='h6'
                    color={'goldenrod'}
                    sx={{
                        "@media(max-width:600px)": { fontSize: "1rem" }
                    }}> All Rights Reserved &copy; Sakshi Maheshwari</Typography>
            </Box>
        </>
    )
}

export default Footer
