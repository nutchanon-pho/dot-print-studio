/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import thLocaleData from 'react-intl/locale-data/th';

import { DEFAULT_LOCALE } from '../app/containers/App/constants';

import enTranslationMessages from './translations/en.json';
import thTranslationMessages from './translations/th.json';

addLocaleData(enLocaleData);
addLocaleData(thLocaleData);

export const appLocales = [
  'th',
  'en',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  th: formatTranslationMessages('th', thTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages),
};
