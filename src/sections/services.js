/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';

import FeatureCardColumn from 'components/feature-card-column.js';
import Work from './work';

import theme from 'theme';

import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Off-Grid Systems',
    title: 'Off-Grid Systems',
    text:
      'For those that have no interest in using the Power Grid, we offer fully off-grid solar power systems that can power the whole vicinity be it an office or home. The system is not tied to the grid allowing the vicinity to be self powered.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Grid-Tied Systems',
    title: 'Grid-Tied Systems',
    text:
      'We also offer Grid-tied systems that consist of a standard backup system but includes solar panels (also referred to as the solar array). These systems are the de facto investment for long-term saving on electricity bills.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Backup Systems',
    title: 'Backup Systems',
    text:
      'We also offer Backup Systems to keep the lights on during power outages. We understand that working from home and remote jobs are now a norm. A backup system is an asset whenever the LOAD SHEDDING boogeyman visits.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Installations',
    title: 'Installations',
    text:
      "We don't sell a product and leave the client stranded. We have a team of qualified electricians to perform installations, provide support, or assist with diagnostics should there be problems with an installed system.",
  },
];

export default function Services() {
  return (
    <section id="service" sx={{ variant: 'section.services' }}>
      <Container>
        <hr sx={theme.styles.hr} />
        <br />
        <br />
        <SectionHeader slogan="WHAT DO WE DO?" title="Our Services" />
        <hr sx={theme.styles.hr} />
        <br />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(4,1fr)'],
  },
};
