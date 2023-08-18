import { badge } from './Badge.css';
import { Box, BoxProps } from 'components/Box/Box';
import React from 'react';

export function Badge(props: BoxProps) {
  return <Box as='span' className={badge} {...props} />;
}
