import React from 'react';

export default {
  title: 'img',
};

// assume image.png is located in the "public" directory.
export const withAnImage = () => (
  <img src="logo512.png" alt="my image" />
);
