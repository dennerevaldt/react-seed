import pt from './default';
/* eslint import/extensions: "off" */
import en from './default.en';

import mainPt from '~/screens/Main/locales/default';
import mainEn from '~/screens/Main/locales/default.en';

pt['pt-BR'].main = mainPt['pt-BR'];
en.en.main = mainEn.en;

export { pt, en };
