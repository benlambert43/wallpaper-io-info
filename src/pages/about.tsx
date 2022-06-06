import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <Typography>This is my about page.</Typography>
    </Layout>
  );
};

export default AboutPage;
