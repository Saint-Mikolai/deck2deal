export const translations = {
  en: {
    title: 'Contact Us',
    placeholder: 'Your message...',
    back: 'Back',
    send: 'Send'
  },
  ru: {
    title: 'Связаться с нами',
    placeholder: 'Ваше сообщение...',
    back: 'Назад',
    send: 'Отправить'
  }
};

export function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

export function setLanguage(lang) {
  localStorage.setItem('language', lang);
  updatePageContent();
}

export function updatePageContent() {
  const currentLang = getCurrentLanguage();
  const texts = translations[currentLang];
  
  document.querySelector('[data-i18n="title"]').textContent = texts.title;
  document.querySelector('[data-i18n="placeholder"]').placeholder = texts.placeholder;
  document.querySelector('[data-i18n="back"]').textContent = texts.back;
  document.querySelector('[data-i18n="send"]').textContent = texts.send;
}