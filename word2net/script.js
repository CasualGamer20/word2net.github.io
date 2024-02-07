"use strict";

const navigacija = document.querySelector(".nav");
const prvaSekcija = document.getElementById("sekcija_prva");
const sveSekcije = document.querySelectorAll(".s");
const containerZaTabove = document.querySelector(".container_za_tabove");
const tabovi = document.querySelectorAll(".tab");
const tekstovi = document.querySelectorAll(".kontent");
const rasklopi = document.querySelectorAll(".rasklop");
const botun = document.querySelector(".btn1");
const kopirajt = document.getElementById("copyright");

//sticky navigation

// const funkcijaZaNav = function (entries) {
//   const [entryNav] = entries;
//   console.log(entryNav);
//   if (entryNav.isIntersecting) {
//     navigacija.classList.add("sticky");
//   }
// };

// const observerZaNav = new IntersectionObserver(funkcijaZaNav, {
//   root: null,
//   threshold: 0.2,
// });

// observerZaNav.observe(prvaSekcija);

//smooth scrolling (btn1)
// botun.addEventListener("click", function () {
//   kopirajt.scrollIntoView({ behavior: "smooth" });
// });

//tranzicije za sekcije
const observerFunkcijaZaSekcije = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove("sekcija_sakrivena");
  } else return;
  observer.unobserve(entry.target);
};

const opcije = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(observerFunkcijaZaSekcije, opcije);

sveSekcije.forEach(function (section) {
  observer.observe(section);
});

//container tab
containerZaTabove.addEventListener("click", function (e) {
  if (e.target.classList.contains("tab")) {
    tabovi.forEach((el) => {
      if (!e.target.classList.contains("tab_active"))
        el.classList.remove("tab_active");
    });
    e.target.classList.add("tab_active");

    tekstovi.forEach((el) => {
      el.classList.remove("kontent_activate");
      const tekst = document.querySelector(`.kontent_${e.target.dataset.tab}`);
      tekst.classList.add("kontent_activate");
    });
  }
});

//Kutija sa 3 tekst bloka
const funkcijaZaUklanjanje = function () {
  rasklopi.forEach((el) => {
    el.classList.remove("aktivni_rasklop");
  });
};

rasklopi.forEach((el) => {
  el.addEventListener("click", function (e) {
    funkcijaZaUklanjanje();
    el.classList.add("aktivni_rasklop");
  });
});
