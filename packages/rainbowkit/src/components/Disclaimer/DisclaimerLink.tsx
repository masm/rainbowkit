import { Box } from '../Box/Box';
import React, { ReactNode } from 'react';

export const DisclaimerLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Box
      as='a'
      color='accentColor'
      href={href}
      rel='noreferrer'
      target='_blank'
    >
      {children}
    </Box>
  );
};
