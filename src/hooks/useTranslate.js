import { useState, useContext, createContext } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslate() {
  const { lang } = useContext(LanguageContext);
  const t = (key) => translations[lang][key] || key;
  return t;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
