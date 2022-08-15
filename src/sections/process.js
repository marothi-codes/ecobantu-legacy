/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'Consultation & Site Visit',
    text:
      "It all starts with a telephonic consultation with the client then we do a site visit to ascertain what the client wants then we take photos for reference later on. We also get the client's utility account for the last 3 to 6 months.",
  },
  {
    id: 2,
    title: 'Quotation Process',
    text:
      'We draft different quotations giving the client options to consider. In doing this we also supply the client with spreadsheets that have check lists so that the client can make an informed decision regarding which inverter and battery he/she should consider and this goes hand in hand with what we have specified in the quotes.',
  },
  {
    id: 3,
    title: 'Order Processing',
    text:
      'Once the client has confirmed the order and paid the initial deposit, we place an order (as per the confirmed quotation) to our supplier and collect it on behalf of the client then we set up an appointment with the client so that our qualified professionals may perform the installation on the date specified.',
  },
  {
    id: 4,
    title: 'Installation & CoC',
    text:
      'We install the system and once it is up and running and the client has paid the balance of the quote, we issue  a paid in full invoice along with a CoC (Certificate of Compliance).',
  },
];

export default function Process() {
  return (
    <section id="process" sx={styles.process}>
      <Container>
        <SectionHeader
          title="Solar Purchasing Process"
          slogan="GET INSIGHT FROM THE SALE TO THE INSTALLATION PROCESS"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  process: {
    backgroundColor: 'primary',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(4,1fr)'],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
    '@media screen and (max-width: 1023.99px)': {
      textAlign: 'center',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'secondary',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: 'black',
    '@media screen and (max-width: 1023.99px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
