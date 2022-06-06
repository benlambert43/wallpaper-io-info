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
        <div style={{ padding: '5vw' }}>
          <Typography>{pageTitle}</Typography>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
