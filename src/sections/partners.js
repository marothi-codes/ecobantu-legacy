/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import Carousel from 'react-multi-carousel';
import theme from 'theme';

import SectionHeader from 'components/section-header';
import ButtonGroup from 'components/button-group';

import Partner1 from 'assets/partner-3.png';
import Partner2 from 'assets/partner-2.png';
import Partner3 from 'assets/partner-4.png';
import Partner4 from 'assets/partner-1.png';
import Partner5 from 'assets/partner-5.png';
import Partner6 from 'assets/partner-6.png';
import Partner7 from 'assets/partner-7.png';
import Partner8 from 'assets/partner-8.png';
import Partner9 from 'assets/partner-9.png';
import Partner10 from 'assets/partner-10.png';
import Partner11 from 'assets/partner-11.png';
import Partner12 from 'assets/partner-12.png';
import Partner13 from 'assets/partner-13.png';
import Partner14 from 'assets/partner-14.png';
import Partner15 from 'assets/partner-15.png';
import Partner16 from 'assets/partner-16.png';
import Partner17 from 'assets/partner-17.png';
import Partner18 from 'assets/partner-18.png';
import Partner19 from 'assets/partner-19.png';
import Partner20 from 'assets/partner-10.png';
import Partner21 from 'assets/partner-21.png';
import Partner22 from 'assets/partner-22.png';
import Partner23 from 'assets/partner-23.png';
import Partner24 from 'assets/partner-24.png';
import Partner25 from 'assets/partner-25.png';
import Partner26 from 'assets/partner-26.png';
import Partner27 from 'assets/partner-27.png';
import Partner28 from 'assets/partner-28.png';
import Partner29 from 'assets/partner-29.png';
import Partner30 from 'assets/partner-30.png';
import Partner31 from 'assets/partner-31.png';
import Partner32 from 'assets/partner-32.png';

const partnerLogos = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  Partner8,
  Partner9,
  Partner10,
  Partner11,
  Partner12,
  Partner13,
  Partner14,
  Partner15,
  Partner16,
  Partner17,
  Partner18,
  Partner19,
  Partner20,
  Partner21,
  Partner22,
  Partner23,
  Partner24,
  Partner25,
  Partner26,
  Partner27,
  Partner28,
  Partner29,
  Partner30,
  Partner31,
  Partner32,
];

const data = {
  subTitle: 'WE WORK WITH TOP MANUFACTURERS',
  title: 'Trusted Brands',
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransform: 0,
  arrows: false,
  autoPlay: true,
  autoPlaySpeed: 2000,
  centerMode: true,
  className: '',
  containerClass: 'carousel-container',
  customButtonGroup: <ButtonGroup />,
  dotListClass: '',
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: '',
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: '',
  slidesToSlide: 1,
};

export default function Partners() {
  return (
    <section sx={{ variant: 'section.partners' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.header}>
          <SectionHeader slogan={data.subTitle} title={data.title} />
          <hr sx={theme.styles.hr} />

          <Box sx={styles.reviewCard}>
            <Carousel {...carouselParams}>
              {partnerLogos.map((item, idx) => (
                <div className="image" key={`partner-logo-${idx}`}>
                  <Image src={item} alt={`partner-logo-${idx}`} />
                </div>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  header: {
    width: '100%',
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
};
