/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import Work from '../sections/work';
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
    text: `To become the preferred supplier of solar and security products and equipment in Africa.`,
  },
  {
    id: 2,
    imgSrc: Performance,
    altText: 'Vision',
    title: 'Our Vision',
    text: `To make sustainable energy available to the people of South Africa and Africa - quality at the best price with the best smile.`,
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Our Values',
    title: 'Our Values',
    text: `Our values include but are not limited to: Delivering Excellence, Innovative thinking, Passionate Commitment, Having fun whilst working, Ethical business practices & principles.`,
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Post Sales Support',
    title: 'Post Sales Support',
    text:
      'To our existing clients and prospect clients, we are here for you every step of the way. Working with Foremost Solar is not a transaction but a relationship. Give us a shout whenever in need.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" sx={{ variant: 'section.whyUs' }}>
      <Container>
        <hr sx={theme.styles.hr} />
        <br />
        <br />

        <SectionHeader slogan="BEST IN THE BUSINESS" title="Why Foremost Solar" />

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
        <br />
        <hr sx={theme.styles.hr} />
        <Work />
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
