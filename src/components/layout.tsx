import * as React from 'react';
import { navigate, useStaticQuery, graphql, Link } from 'gatsby';
import Button from '@mui/material/Button';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Icon,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import colors from '../../ColorTheme';

type LayoutProps = {
  pageTitle: string;
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <nav>
        <AppBar position="static" style={{ backgroundColor: colors.blue3 }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                <Avatar>
                  <StaticImage alt="Wallpaper io logo hero image" src="../images/icon.png" />
                </Avatar>
                <Typography style={{ marginLeft: 15, fontWeight: 'lighter' }}>
                  Wallpaper.io
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <div
                  style={{
                    marginLeft: 30,
                    padding: 10,
                  }}
                >
                  <Link
                    to="/"
                    style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
                    activeStyle={{ color: colors.orange1 }}
                  >
                    <Typography fontWeight={'bold'}>Home</Typography>
                  </Link>
                </div>
                <div
                  style={{
                    marginRight: 30,
                    padding: 10,
                  }}
                >
                  <Link
                    to="/about"
                    style={{ color: 'white', textDecoration: 'none' }}
                    activeStyle={{ color: colors.orange1 }}
                  >
                    <Typography fontWeight={'bold'}>About</Typography>
                  </Link>
                </div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
