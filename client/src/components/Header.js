import React from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  ru: { nativeName: "Русский" },
};

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <header>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
