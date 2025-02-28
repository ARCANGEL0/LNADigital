import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEnus from "./locales/enus/translation.json";
import translationPtbr from "./locales/ptbr/translation.json";
import translationEses from './locales/eses/translation.json';
i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "ptbr",
    fallbackLng: "ptbr",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      enus: {
        translations: translationEnus,
      },
      ptbr: {
        translations: translationPtbr,
      },
      eses: {
        translations: translationEses
      }
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;