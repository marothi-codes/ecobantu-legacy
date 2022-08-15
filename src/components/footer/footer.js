/** @jsx jsx */
import { jsx, Box, Container, Grid, Image, Text } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from '../link';
import theme from 'theme';
import data from './footer.data';
import FooterLogo from 'assets/footer-logo.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.footer.footerTopArea}>
        <Container>
          <Grid sx={styles.footer.grid}>
            <div>
              <h3 sx={styles.footer.footerTopArea.foremostContacts}>Contact Us</h3>
              <hr sx={theme.styles.hr} />
              <Link path="mailto:info@ecobantu.co.za" sx={styles.footer.footerTopArea.link}>
                <strong>Email: </strong>info@ecobantu.co.za
              </Link>
              <Link path="tel:+27626882471" sx={styles.footer.footerTopArea.link}>
                <strong>Phone: </strong>+27 62 688 2471
              </Link>
              <Link path="tel:+27730285639" sx={styles.footer.footerTopArea.link}>
                <strong>Other: </strong>+27 73 028 5639
              </Link>

              <nav>
                {data.menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    path={item.path}
                    sx={styles.footer.footerTopArea.link}
                    target="_blank"
                  >
                    {item.icon} {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 sx={styles.footer.footerTopArea.foremostOffice}>Our Address</h3>
              <hr sx={theme.styles.hr} />
              <address sx={styles.footer.footerTopArea.address}>
                496 Spionkop Street
                <br />
                North Riding A.H
                <br />
                Johannesburg
                <br />
                2188
              </address>
            </div>
          </Grid>
        </Container>
      </Box>
      <Box sx={styles.footer.footerBottomArea}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          sx={styles.footer.logo}
        >
          <Image src={FooterLogo} width={260} alt="ecoBantu Solutions Logo" />
        </ScrollLink>
        <Box sx={styles.footer.menus}>
          <Text sx={styles.footer.copyright}>
            ecoBantu Solutions (Pty) Ltd
            <br />
            Copyright &copy; {new Date().getFullYear()}
            <br />
            <Link
              path="https://github.com/marothi-codes"
              target="_blank"
              rel="noopener noreferrer"
              label="Back to Top"
              sx={styles.footer.footerBottomArea.link}
            >
              Developed By: Marothi Codes
            </Link>
          </Text>
        </Box>
      </Box>
    </footer>
  );
}

const styles = {
  footer: {
    logo: {
      cursor: 'pointer'
    },
    footerBottomArea: {
      backgroundColor: 'text',
      color: '#fff',
      display: 'flex',
      pt: [1, null, 2],
      pb: ['10px', null, '10px'],
      textAlign: 'center',
      flexDirection: 'column',
      link: {
        fontSize: '12.2px',
        color: '#fff',
        cursor: 'pointer',
        transition: 'all 0.35s',
        display: 'block',
        textDecoration: 'none',
        px: [2, null, 4],
        width: '100%',
        ':hover': {
          color: 'secondary',
        },
      },
    },
    footerTopArea: {
      backgroundColor: 'primary',
      color: '#fff',
      display: 'flex',
      pt: [5, 6, 6],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
      nav: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'left',
        width: '100%',
        clear: 'both',
      },
      link: {
        fontSize: [1, '18px'],
        color: '#fff',
        fontWeight: '400',
        mb: 2,
        cursor: 'pointer',
        transition: 'all 0.35s',
        display: 'block',
        textDecoration: 'none',
        lineHeight: [1.5, null, 1.8],
        px: [2, null, 4],
        textAlign: 'left',
        width: '100%',
        ':hover': {
          color: 'secondary',
        },
        '@media screen and (max-width: 1024px)': {
          textAlign: 'center',
        },
      },
      foremostContacts: {
        '@media screen and (min-width: 1024px)': {
          textAlign: 'left',
        },
      },
      foremostOffice: {
        '@media screen and (min-width: 1024px)': {
          textAlign: 'right',
        },
      },
      address: {
        textAlign: 'left',
        '@media screen and (min-width: 1024px)': {
          textAlign: 'right',
        },
        '@media screen and (max-width: 1023.99px)': {
          textAlign: 'center',
        },
      },
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '18px'],
      color: '#fff',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      width: '100%',
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
    grid: {
      width: ['100%', '80%', '100%'],
      mx: 'auto',
      gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
      gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', null, 'repeat(2,1fr)'],
    },
  },
};
