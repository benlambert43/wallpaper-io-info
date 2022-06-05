import * as React from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';
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
} from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import colors from '../../ColorTheme';

type LayoutProps = {
  pageTitle: string;
  children: JSX.Element[];
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
              <Box sx={{ flexGrow: 0 }}>
                <Avatar>
                  <StaticImage alt="Wallpaper io logo hero image" src="../images/icon.png" />
                </Avatar>
              </Box>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <div
                  style={{
                    padding: 10,
                    marginLeft: 30,
                  }}
                >
                  <Button
                    name="Home"
                    style={{ paddingLeft: 20, paddingRight: 20, color: 'white' }}
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Home
                  </Button>
                </div>
                <div
                  style={{
                    padding: 10,
                  }}
                >
                  <Button
                    name="About"
                    style={{ paddingLeft: 20, paddingRight: 20, color: 'white' }}
                  >
                    About
                  </Button>
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
