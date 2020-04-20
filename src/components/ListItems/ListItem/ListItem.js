import React, { memo } from 'react';
import './style.css';

const ListItem = (props) => {
  console.log('props--', props);
  return (<h1>List item</h1>);
}

export default memo(ListItem);
