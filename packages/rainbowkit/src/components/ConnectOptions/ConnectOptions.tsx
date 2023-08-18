import { isMobile } from '../../utils/isMobile';
import { DesktopOptions } from './DesktopOptions';
import { MobileOptions } from './MobileOptions';
import React from 'react';

export default function ConnectOptions({ onClose }: { onClose: () => void }) {
  return isMobile() ? (
    <MobileOptions onClose={onClose} />
  ) : (
    <DesktopOptions onClose={onClose} />
  );
}
