import languageContent from './data.js';

const select = document.querySelector('select');

select.addEventListener('change', () => changeLanguage(select.value));

function changeLanguage(lang) {
  for (const key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }
}
changeLanguage(lang);

//animation:
function getBlockAnimation(dur) {
  return (
    anime({
      targets: '.info',
      translateX: [
        { value: '-200%', duration: 0 },
        { value: '0%', duration: dur },
      ],
    }),
    anime({
      targets: '.about',
      translateX: [
        { value: '200%', duration: 0 },
        { value: '0%', duration: dur },
      ],
    })
  );
}
getBlockAnimation(1000);

changeLanguage('cz');
