import { Text } from '../Text/Text';
import React, { ReactNode } from 'react';

export const DisclaimerText = ({ children }: { children: ReactNode }) => {
  return (
    <Text color='modalTextSecondary' size='12' weight='medium'>
      {children}
    </Text>
  );
};
