import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import koCommon from './locales/ko/common.json';
import enCommon from './locales/en/common.json';

export const defaultNS = 'common';

export const resources = {
	ko: {
		common: koCommon,
	},
	en: {
		common: enCommon,
	},
} as const;

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'ko',
		supportedLngs: ['ko', 'en'],
		defaultNS,
		ns: ['common'],
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['localStorage', 'navigator', 'htmlTag'],
			caches: ['localStorage'],
		},
	});

export default i18n;

