import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Button, Typography } from '@mui/material';
import colors from '../../ColorTheme';

const ContactPage = () => {
  const [email, setEmail] = React.useState<string>();

  const contactStr1 = 'benlambertdev';
  const contactStr2 = '43';
  const contactStr3 = '@';
  const contactStr4 = 'gmail';
  const contactStr5 = '.com';

  const generateStr = () => {
    return contactStr1 + contactStr2 + contactStr3 + contactStr4 + contactStr5;
  };

  return (
    <Layout pageTitle='Contact Us'>
      <Typography variant='h6'>To generate contact email, press the button below.</Typography>
      <Typography color={colors.gray3} variant='subtitle2' style={{ paddingTop: 10 }}>
        (helps prevent bots)
      </Typography>
      <Box style={{ paddingTop: 20, paddingBottom: 50 }}>
        {email ? (
          email
        ) : (
          <Button
            onClick={() => {
              setEmail(generateStr());
            }}
            variant='contained'
          >
            Generate support email
          </Button>
        )}
      </Box>
    </Layout>
  );
};

export default ContactPage;
