/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCardColumn({ src, altText = 'default alt text', title, text }) {
  return (
    <Box sx={styles.card}>
      <Image src={src} altText={altText} sx={styles.img} />{/*  */}
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'left'],
    px: [4, null, 0],
    '@media screen and (max-width: 1023.99px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
  },
  img: {
    width: ['70px', null, null, '70px', '70px', '70px'],
    height: 'auto',
    flexShrink: 0,
    ml: 'auto',
    mr: 'auto',
    mb: 2,
    textAlign: 'center',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
