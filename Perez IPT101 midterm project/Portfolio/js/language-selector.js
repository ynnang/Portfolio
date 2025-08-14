
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('langSelect');
  const LANG_KEY = 'portfolio_lang';

 
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Contact',
      hero_title: 'Hi, I’m Armando Marquez - Future Web Developer',
      hero_sub: 'I build modular, accessible, and responsive websites.',
      hero_cta: 'Get in touch',
      about_title: 'About Me',
      about_text: 'I’m a developer focused on UI and frontend architecture. I enjoy modular code and clean design.',
      portfolio_title: 'Selected Work',
      contact_title: 'Contact',
      label_name: 'Name',
      label_email: 'Email',
      label_message: 'Message',
      btn_send: 'Send'
    },
    fil: {
      nav_home: 'Bahay',
      nav_about: 'Tungkol',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Makipag-ugnay',
      hero_title: 'Kumusta, ako si Armando Marquez - Future Web Developer',
      hero_sub: 'Gumagawa ako ng modular, accessible, at responsive na mga website.',
      hero_cta: 'Makipag-ugnayan',
      about_title: 'Tungkol sa Akin',
      about_text: 'Ako ay developer na nakatuon sa UI at frontend architecture. Gustung-gusto ko ang modular na code at malinis na disenyo.',
      portfolio_title: 'Piniling Mga Gawain',
      contact_title: 'Makipag-ugnay',
      label_name: 'Pangalan',
      label_email: 'Email',
      label_message: 'Mensahe',
      btn_send: 'Ipadala'
    }
  };

  
  function applyLanguage(lang) {
    const map = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (map[key]) node.textContent = map[key];
    });
  }

  // initial load from storage
  const saved = localStorage.getItem(LANG_KEY) || 'en';
  select.value = saved;
  applyLanguage(saved);

  select.addEventListener('change', () => {
    const val = select.value;
    localStorage.setItem(LANG_KEY, val);
    applyLanguage(val);
  });
});
