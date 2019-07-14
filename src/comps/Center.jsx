import React from 'react';

const Center = ({ children, height = '100%' }) => (
  <div style={styles.centerOuter(height)}>
    <div style={styles.centerInner}>
      {children}
    </div>
  </div>
);

const styles = {
  centerOuter: height => ({
    height,
    textAlign: 'center',
    position: 'relative',
  }),
  centerInner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
};

export default Center;
