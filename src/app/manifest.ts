import { MetadataRoute } from 'next';
import { APP_NAME, APP_DESCRIPTION } from './config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    start_url: '/',
    orientation: 'portrait',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
  };
}
