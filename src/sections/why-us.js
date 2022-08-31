/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import theme from 'theme';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Partnership,
    altText: 'Our Mission',
    title: 'Our Mission',
    text: `To be the Premier Entity when it comes to Sustainable Renewable Energy Solutions for ALL South Africans with the goal of expanding within the SADC and beyond.`,
  },
  {
    id: 2,
    imgSrc: Performance,
    altText: 'Vision',
    title: 'Our Vision',
    text: `To democratise Solar Power so that it becomes commonplace thus lowering the barrier to entry level solar so that more South Africans can afford solar, while pioneering better ways of harnessing electricity without the burning of Fossil Fuels. We want to offer excellent client satisfaction and service, matched with the the highest employee retention in the industry.`,
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Our Values',
    title: 'Our Values',
    text: `Our values include but are not limited to: A human-centric working environment, pragmatic Ingenuity, growth through obstacles and a child-like thirst for learning. ecoBantu Solutions (Pty) Ltd is a South African BBBEE Level 1 Solar Retailer, Distributor & installer that believes that reliable electricity is not only a necessity but a BASIC HUMAN RIGHT. People are our Passion.`,
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Post Sales Support',
    title: 'Post Sales Support',
    text:
      'To our existing clients and prospect clients, we are here for you every step of the way. Working with ecoBantu Solutions is not a transaction but a relationship. Give us a call whenever in you are in need.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" sx={{ variant: 'section.whyUs' }}>
      <Container>
        <hr sx={theme.styles.hr} />
        <br />
        <br />

        <SectionHeader slogan="BEST IN THE BUSINESS" title="Why ecoBantu Solutions" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)'],
    '@media screen and (max-width: 767.99px)': {
      textAlign: 'center',
    },
  },
};
