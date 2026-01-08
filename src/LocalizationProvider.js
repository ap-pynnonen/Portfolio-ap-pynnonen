import React, { createContext, useContext, useMemo, useState } from 'react';
import en from './locales/en.json';
import fi from './locales/fi.json';

const resources = { en, fi };
const defaultLang = 'en';
const Context = createContext();

function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

export function LocalizationProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || defaultLang);
  const value = useMemo(() => {
    const t = (key) => {
      const found = getByPath(resources[lang] || resources[defaultLang], key);
      if (found !== undefined) return found;
      return getByPath(resources[defaultLang], key) || key;
    };
    return { lang, setLang: (l) => { localStorage.setItem('lang', l); setLang(l); }, t };
  }, [lang]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useLocalization() {
  return useContext(Context);
}