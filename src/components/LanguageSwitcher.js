import React from 'react';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <div className="language-switcher">
      <label>Language:</label>
      <div className="language-buttons">
        {languages.map(lang => (
          <button
            key={lang.code}
            className={`lang-btn ${currentLanguage === lang.code ? 'active' : ''}`}
            onClick={() => onLanguageChange(lang.code)}
            title={lang.name}
          >
            {lang.flag} {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
