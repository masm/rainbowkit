import { EmojiAvatar } from '../Avatar/EmojiAvatar';
import React, { createContext } from 'react';

export type AvatarComponentProps = {
  address: string;
  ensImage?: string | null;
  size: number;
};
export type AvatarComponent = React.FunctionComponent<AvatarComponentProps>;

export const defaultAvatar = EmojiAvatar;

export const AvatarContext = createContext<AvatarComponent>(defaultAvatar);
