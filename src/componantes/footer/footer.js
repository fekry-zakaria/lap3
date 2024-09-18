import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import './footer.css';

const Footer = () => {
    return (
        <>
      <Box
            sx={{
                backgroundColor: 'black',
                color: '#ffffff',
                py: 5,
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Company
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Products
                        </Typography>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Angular
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            React
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Vue
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block">
                            Laravel
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Useful Links
                        </Typography>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Pricing
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Settings
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Orders
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block">
                            Help
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2" paragraph>
                            New York, NY 10012, US
                        </Typography>
                        <Typography variant="body2" paragraph>
                            info@example.com
                        </Typography>
                        <Typography variant="body2" paragraph>
                            +01 234 567 88
                        </Typography>
                        <Typography variant="body2">
                            +01 234 567 89
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={4} display="flex" justifyContent="center">
                    <IconButton href="#" color="inherit">
                        <Facebook />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <Twitter />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <Instagram />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <LinkedIn />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <GitHub />
                    </IconButton>
                </Box>
                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color="textSecondary">
                        © 2024 Your Company. All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
        </>
    );
};

export default Footer;
