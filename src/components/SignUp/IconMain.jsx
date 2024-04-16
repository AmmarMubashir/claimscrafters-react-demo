import React from 'react';

const styles = {
  Icon: {
    color: '#023f81',
    fill: '#023f81',
    fontSize: '259px',
    top: '20px',
    left: '-6px',
    width: '259px',
    height: '120px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z">
    </path>
    <path d="M22 9.97V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h12v-5.03c0-2.76 2.24-5 5-5h1zM20 8l-8 5-8-5V6l8 5 8-5v2z">
    </path>
    <path d="M23 15v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;