import React, { useState } from 'react';
import { Button } from 'theme-ui';
import FsLightbox from 'fslightbox-react';

import Item1 from 'assets/work/01.jpg';
import Item2 from 'assets/work/03.jpg';
import Item3 from 'assets/work/07.jpg';
import Item4 from 'assets/work/08.jpg';
import Item5 from 'assets/work/09.jpg';
import Item6 from 'assets/work/10.jpg';
import Item7 from 'assets/work/11.jpg';

function work() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div>
        <Button onClick={() => setToggle(!toggle)} sx={styles.workSection}>See Our Work</Button>
      </div>
      <FsLightbox
        toggler={toggle}
        sources={[
          Item1,
          Item2,
          Item3,
          Item4,
          Item5,
          Item6,
          Item7
        ]}
      />
    </>
  );
}

const styles = {
  workSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1.5rem'
  },
};

export default work;
