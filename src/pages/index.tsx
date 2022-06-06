import { Typography, Box, Avatar, Container, Card, CardContent } from '@mui/material';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import colors from '../../ColorTheme';
import Layout from '../components/layout';

const demoImages = [
  'https://picsum.photos/id/231/300/200',
  'https://picsum.photos/id/242/300/200',
  'https://picsum.photos/id/278/300/200',
];

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <Card
          style={{ margin: 10, justifyContent: 'center', alignItems: 'center', display: 'flex' }}
          elevation={5}
        >
          <CardContent>
            <img style={{ borderRadius: 20 }} src={demoImages[0]} />
          </CardContent>
        </Card>
        <Card
          style={{ margin: 10, justifyContent: 'center', alignItems: 'center', display: 'flex' }}
          elevation={5}
        >
          <CardContent>
            <img style={{ borderRadius: 20 }} src={demoImages[1]} />
          </CardContent>
        </Card>
        <Card
          style={{
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
          elevation={5}
        >
          <CardContent>
            <img style={{ borderRadius: 20 }} src={demoImages[2]} />
          </CardContent>
        </Card>
      </Box>
      <Box style={{ padding: 10, paddingRight: '8vw' }}>
        <Typography variant='h6' color={colors.blue3} style={{ paddingTop: 25, paddingBottom: 25 }}>
          Beautiful, perfectly sized wallpaper images for your smartphone or tablet.
        </Typography>
        <Typography>
          Available on the Google Play Store and coming soon to the App Store.
        </Typography>
      </Box>
    </Layout>
  );
};

export default IndexPage;
