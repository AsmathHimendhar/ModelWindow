'use strict';
const sm = document.querySelectorAll('.show-modal'); //.textContent;
const m = document.querySelector('.modal');
const o = document.querySelector('.overlay');
const cm = document.querySelector('.close-modal');
//console.log(sm);
for (let i = 0; i < sm.length; i++) {
  //console.log(sm[i]);
  sm[i].addEventListener('click', function () {
    m.classList.remove('hidden');
    o.classList.remove('hidden');
  });
}
const q = function () {
  m.classList.add('hidden');
  o.classList.add('hidden');
};
cm.addEventListener('click', q);
o.addEventListener('click', q);
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && m.classList[1] !== 'hidden') {
    q();
  } else if (e.key === 'Escape') {
    m.classList.remove('hidden');
  }
});
