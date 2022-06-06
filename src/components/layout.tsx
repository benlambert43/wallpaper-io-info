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
import TopNavBar from './topNavMenu';
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
        <TopNavBar />
      </nav>
      <main>
        <div>
          <Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginBottom: 20,
                marginRight: '2vw',
                marginTop: '1vh',
                marginLeft: '1vw',
              }}
            >
              <Box style={{ paddingRight: 5 }}>
                <Avatar>
                  <StaticImage alt='Wallpaper io logo hero image' src='../images/icon.png' />
                </Avatar>
              </Box>
              <Box style={{ paddingLeft: 5 }}>
                <Typography color={colors.blue1} fontWeight={'light'}>
                  wallpaper.io
                </Typography>
              </Box>
            </Box>
            <div style={{ padding: '2vw' }}>
              <Typography variant='h4'>{pageTitle}</Typography>
              {children}
            </div>
          </Box>
        </div>
      </main>
    </div>
  );
};

export default Layout;
