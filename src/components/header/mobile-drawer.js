import React, { useState } from 'react';
import { Box } from 'theme-ui';
import Drawer from 'components/drawer';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import { FaFacebookSquare, FaInstagram, FaGoogle } from 'react-icons/fa';
import menuItems from './header.data';

const social = [
  {
    path: 'https://www.facebook.com/EcoBantu-Solutions-103434729152842',
    icon: <FaFacebookSquare />,
    title: 'Facebook',
  },
  {
    path: 'https://www.instagram.com/eco_bantu/',
    icon: <FaInstagram />,
    title: 'Instagram',
  },
  {
    path:
      'https://www.google.com/search?q=ecobantu+solutions+%28pty%29+ltd',
    icon: <FaGoogle />,
    title: 'Google',
  },
];

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((previousState) => !previousState)}
      closeButton={<IoMdClose size="24px" />}
      drawerStyle={styles.drawer}
      closeButtonStyle={styles.close}
    >
      <Box sx={styles.content}>
        <Box sx={styles.menu}>
          {menuItems.map((item, idx) => (
            <Link
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={idx}
              onClick={() => setIsDrawerOpen((previousState) => !previousState)}
            >
              {item.label}
            </Link>
          ))}
        </Box>
        <Box sx={styles.menuFooter}>
          <Box sx={styles.social}>
            {social.map((item, idx) => (
              <Box as="span" key={idx} sx={styles.social.icon}>
                <Link
                  to={item.path}
                  onClick={() => setIsDrawerOpen((previousState) => !previousState)}
                >
                  {item.icon}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.5rem',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'primary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};
