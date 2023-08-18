import { pre } from './Pre.css';
import clsx from 'clsx';
import { Box, BoxProps } from 'components/Box/Box';
import React from 'react';

export function Pre({ children, className }: BoxProps) {
  return (
    <Box as='pre' className={clsx(pre, className)}>
      {children}
    </Box>
  );
}
