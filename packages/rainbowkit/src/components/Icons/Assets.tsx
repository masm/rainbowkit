import { AsyncImage } from '../AsyncImage/AsyncImage';
import { loadImages } from '../AsyncImage/useAsyncImage';
import React from 'react';

const src = async () => (await import('./assets.svg')).default;

export const preloadAssetsIcon = () => loadImages(src);

export const AssetsIcon = () => (
  <AsyncImage
    background='#d0d5de'
    borderRadius='10'
    height='48'
    src={src}
    width='48'
  />
);
