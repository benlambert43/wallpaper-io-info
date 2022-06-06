import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Typography } from '@mui/material';
import { HTMLPrivacyPol } from '../privacypol';

const PrivacyPage = () => {
  function privacyIframe() {
    return {
      __html: HTMLPrivacyPol,
    };
  }

  return (
    <Layout pageTitle='Privacy Policy'>
      <Box>
        <div style={{ paddingTop: 20, paddingBottom: 20 }}>
          <hr />
        </div>
        <div dangerouslySetInnerHTML={privacyIframe()} />
      </Box>
    </Layout>
  );
};

export default PrivacyPage;
