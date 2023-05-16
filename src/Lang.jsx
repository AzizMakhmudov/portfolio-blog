import { createContext, useState } from "react";

import en from "./data/en.json";
import uz from "./data/uz.json";

const languages = ["uz", "en"];
const languageStrings = {
  uz,
  en,
};

export const LanguageContext = createContext({
  language: "en",
  strings: languageStrings.en,
  languages,
});

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  function changeLanguage(lang) {
    if (!languages.includes(lang)) throw Error(`${lang} does not exist`);
    setLanguage(lang);
  }
  
  return (
    <LanguageContext.Provider
      value={{
        language,
        languages,
        strings: languageStrings[language],
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
