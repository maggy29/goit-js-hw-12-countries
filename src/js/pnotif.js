/* eslint-disable import/no-extraneous-dependencies */
import { defaults, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

defaults.delay = 600;
defaults.width = '300px';
defaults.minheigth = '30px';
defaults.maxTextHeight = null;
defaults.sticker = false;
defaults.closer = false;
export default {
  tooMany() {
    error({
      text: 'Too many matches found. Try again with more specific request!',
    });
  },
  notFound() {
    error({
      text: 'No matches found!',
    });
  },
  wentWrong() {
    error({
      text: 'Something went wrong(( Be calm and try again!',
    });
  },
};
