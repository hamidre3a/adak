import React from 'react';

import Navbar from 'comps/Navbar';
import Footer from 'comps/Footer';


function Template({ children, gray=true }) {
  return (
    <div style={styles.root(gray)}>
      <Navbar />
      {children}
      <div style={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  root: gray => ({
    backgroundColor: gray ? '#e0e0e0' : 'white',
    minHeight: '100vh',
  }),
  footerContainer: {
    // position: 'absolute',
    // bottom: 0,
  },
};

export default Template;
