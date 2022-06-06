import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import colors from '../../ColorTheme';
import { Link, navigate } from 'gatsby';

const pages = [
  { name: 'Home', route: '/' },
  { name: 'Contact', route: '/contact' },
  { name: 'Privacy', route: '/privacy' },
];

const TopNavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (navOption: { name: string; route: string }) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <StaticImage
              alt='Wallpaper io logo hero image'
              src='../images/icon.png'
              height={32}
              width={32}
            />
          </Box>
          <Typography
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 'light',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            wallpaper.io
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={page.name}>
                  <Link
                    onClick={() => handleCloseNavMenu(page)}
                    to={page.route}
                    style={{
                      color: 'gray',
                      textDecoration: 'none',
                      paddingLeft: 25,
                      paddingRight: 25,
                    }}
                    activeStyle={{ color: colors.orange1 }}
                  >
                    <Typography>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <StaticImage
              alt='Wallpaper io logo hero image'
              src='../images/icon.png'
              height={24}
              width={24}
            />
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 'light',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            wallpaper.io
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Box
                key={page.name}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <Link
                  onClick={() => handleCloseNavMenu(page)}
                  to={page.route}
                  style={{ color: colors.gray2, textDecoration: 'none' }}
                  activeStyle={{ color: 'white' }}
                >
                  <Typography style={{ fontWeight: 'bold' }}>{page.name}</Typography>
                </Link>
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopNavBar;
