import { wrapper } from './Wrapper.css';
import { Box, BoxProps } from 'components/Box/Box';
import React from 'react';

export function Wrapper(props: BoxProps) {
  return <Box className={wrapper} {...props} />;
}
