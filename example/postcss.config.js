// postcss.config.ts

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';

const config = {
  plugins: [
    autoprefixer(),
    cssnano({
      preset: 'default',
    }),
  ],
};

export default config;
