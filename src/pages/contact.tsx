import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Typography } from '@mui/material';

const ContactPage = () => {
  return (
    <Layout pageTitle='Contact Us'>
      <Typography>This is my contact page.</Typography>
    </Layout>
  );
};

export default ContactPage;
