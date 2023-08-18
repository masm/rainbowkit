import { AsyncImage } from '../AsyncImage/AsyncImage';
import { loadImages } from '../AsyncImage/useAsyncImage';
import React from 'react';

const src = async () => (await import('./create.svg')).default;

export const preloadCreateIcon = () => loadImages(src);

export const CreateIcon = () => (
  <AsyncImage
    background='#e3a5e8'
    borderColor='generalBorder'
    borderRadius='10'
    height='48'
    src={src}
    width='48'
  />
);
