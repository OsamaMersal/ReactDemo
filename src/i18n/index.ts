import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const modules = import.meta.glob('./locales/*.json', { eager: true }) as Record<
  string,
  { default: Record<string, any> }
>;

const resources: Record<string, { translation: any }> = {};

for (const path in modules) {
  const lang = path.match(/\.\/locales\/(.*)\.json$/)?.[1];
  if (lang) {
    resources[lang] = { translation: modules[path].default };
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
