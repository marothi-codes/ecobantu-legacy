import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import AboutSection from '../sections/about-section';
import WhyUs from '../sections/why-us';
import Process from '../sections/process';
//import TestimonialCard from '../sections/testimonial';
import ContactSection from 'sections/contact-section';
import Partners from 'sections/partners';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Layout>
          <SEO title="ecoBantu Solutions (Pty) Ltd: Grid-Tied, Off-Grid or Backup Solar Power Systems Retailer, Distributor & Installer in South Africa" />
          <Banner />
          <AboutSection />
          <Services />
          <WhyUs />
          <Process />
          <Partners />
          <ContactSection />
        </Layout>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
