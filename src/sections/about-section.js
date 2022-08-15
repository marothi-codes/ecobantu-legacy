import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';

import VideoThumb from 'assets/video-thumb.jpg';

import theme from 'theme';

const data = {
  subTitle: 'Who Are We?',
  title: 'About ecoBantu Solutions',
};

export default function AboutSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return (
    <section id="about" sx={{ variant: 'section.about' }}>
      <Container>
        <TextFeature subTitle={data.subTitle} title={data.title} description={data.description} />
        <hr sx={theme.styles.hr} />

        <Box sx={styles.contentBox}>
          <Grid sx={styles.grid}>
            <Box sx={styles.card}>
              <Box sx={styles.wrapper}>
                <Text sx={styles.wrapper.subTitle}>
                  ecoBantu Solutions (Pty) Ltd is a South African <strong>BBBEE Level 1</strong>{' '}
                  Solar Retailer, Distributor &amp; installer that believes that reliable
                  electricity is not only a basic necessity but a <strong>HUMAN RIGHT</strong> hence
                  we are in the Solar Business.
                  <br />
                  <br />
                  Our ambition is not only limited to the future of electricity alone but we plan on
                  bringing Sustainable Housing Solutions and some IoT (Internet of Things)
                  awesomeness into the mix as well, so watch this space in a few years time.
                  <br />
                  <br />
                  Looking for Efficient, Timeous and Pragmatic Professionals? That is ecoBantu you
                  are talking about. Contact us NOW to find out how we can help you lower you power
                  bill by a substantial amount, make you immune to <em>"LOAD SHEDDING"</em> or
                  take you completely off-grid.
                </Text>
              </Box>
            </Box>

            <Box sx={styles.card}>
              <Box sx={styles.thumbnail}>
                <Image src={VideoThumb} alt="thumbnail" />
                <Button sx={styles.videoBtn} onClick={handleClick} aria-label="Play Button">
                  <span>
                    <IoIosPlay />
                  </span>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>

      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="HJYEKrIRGNE"
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}

const playPulse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.3);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPulse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(0,0,0,0.8)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ['100%', null, null, '100%', '100%', '100%', null, '100%'],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
    // marginLeft: 'auto', Remove once an introductory video is recorded.
    // marginRight: 'auto', Remove once an introductory video is recorded.
    // textAlign: 'center', Remove once an introductory video is recorded.
    '@media screen and (max-width: 767.99px)': {
      textAlign: 'center',
    },
  },
  grid: {
    pt: [2, null, null, null, 3],
    width: ['100%'],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
      // textAlign: 'center', Remove once an introductory video is recorded.
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
