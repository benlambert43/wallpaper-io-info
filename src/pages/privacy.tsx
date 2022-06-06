import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Typography } from '@mui/material';

const PrivacyPage = () => {
  return (
    <Layout pageTitle="Privacy Policy">
      <Typography>This is my Privacy Policy Page.</Typography>
    </Layout>
  );
};

export default PrivacyPage;
