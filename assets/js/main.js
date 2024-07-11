/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ACCORDION SKILLS */
const skillsContent = document.getElementsByClassName(
    "skills-container-content"
  ),
  skillsHeader = document.querySelectorAll(".skills-container-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-container-content skills-close";
  }
  if (itemClass === "skills-container-content skills-close") {
    this.parentNode.className = "skills-container-content skills-open";
  }
} 

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/* QUALIFICATION TABS */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalButtons = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalButtons.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((link) => {
    link.classList.remove("active-work");
  });
  this.classList.add("active-work");
}

linkWork.forEach((link) => {
  link.addEventListener("click", activeWork);
});

/* BLOG SWIPER  */
var swiper = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
var swiper = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height,
  // add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "light-theme";
const iconTheme = "bxs-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bxs-moon" : "bx bxs-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bxs-moon" ? "add" : "remove"](
    iconTheme
  );
}

if (localStorage.getItem("selected-icon") === "bx bxs-moon") {
  changeImageSrc("l");
} else {
  changeImageSrc("d");
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());

  if (localStorage.getItem("selected-icon") === "bx bxs-moon") {
    changeImageSrc("l");
  } else {
    changeImageSrc("d");
  }
});

function changeImageSrc(additional) {
  $("#low_poly_art").attr("src", `./assets/img/work1-${additional}.png`);
  $("#universal_dictionary").attr(
    "src",
    `./assets/img/work2-${additional}.png`
  );
  $("#chromata").attr("src", `./assets/img/work3-${additional}.png`);
  $("#music_visualizer").attr("src", `./assets/img/work4-${additional}.png`);
  $("#galaxy_simulator").attr("src", `./assets/img/work5-${additional}.png`);
  $("#virtual_piano").attr("src", `./assets/img/work6-${additional}.png`);
  $("#weather").attr("src", `./assets/img/work7-${additional}.png`);
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
scrollReveal.reveal(".home__data");
scrollReveal.reveal(".home__handle", { delay: 700 });
scrollReveal.reveal(".home__social, .home_scroll", {
  delay: 900,
  origin: "bottom",
});

// allow smooth scroll vis JQuery, since the CSS doe not work on all devices
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

//

let langugesTypes = ["en", "hi"];
let selectedLanguageIndex = 0;
let languages = [];

$(document).ready(function () {
  function loadJson(url, listener) {
    $.getJSON(url, function (data) {
      listener(data);
    }).fail(function () {
      console.log("An error has occurred.");
    });
  }

  langugesTypes.forEach((element, i) => {
    loadJson(`assets/json/${element}.json`, (json) => {
      languages[i] = json;
      if (i == 0) {
        changeLanguage(languages[0]);
      }
    });
  });

  onResize();
});

$("#language-button").click(function () {
  if (selectedLanguageIndex == 0) selectedLanguageIndex = 1;
  else selectedLanguageIndex = 0;
  changeLanguage(languages[selectedLanguageIndex]);
});

function changeLanguage(jsonData) {
  $(".nav .nav__logo").html(jsonData.nickname);

  // Home
  $(".home__data .home__greeting").html(jsonData.greeting_msg);
  $(".home__data .home__name").html(jsonData.name);
  $(".home__data .home__role").html(jsonData.role);
  // $(".home__buttons").children().eq(0).html(jsonData.download_cv)
  // $(".home__buttons").children().eq(1).html(jsonData.about_me)
  // $(".home__scroll-name").html(jsonData.scroll_down)

  // About
  // $(".about .section__subtitle").html(jsonData.my_intro)
  // $(".about .section__title").html(jsonData.about_me)
  $(".about__info .about__title").eq(0).html(jsonData.experience);
  $(".about__info .about__subtitle").eq(0).html(jsonData.experience_value);
  $(".about__info .about__title").eq(1).html(jsonData.completed);
  $(".about__info .about__subtitle").eq(1).html(jsonData.completed_value);
  $(".about__info .about__title").eq(2).html(jsonData.worked);
  $(".about__info .about__subtitle").eq(2).html(jsonData.worked_value);
  $(".about__description").html(jsonData.about_description);
  $(".about__data .button").eq(0).html(jsonData.download_cv);
  $(".about__data .button").eq(1).html(jsonData.contact_me);

  // Skills
  $(".skills section__title").html(jsonData.skills_title);
  $(".skills section__subtitle").html(jsonData.skills_subtitle);
  function setSkills(content) {
    let skills_content = $(".skills-container").children();
    for (let i = 0; i < content.length; i++) {
      skills_content.eq(i).find(".skills-title").html(content[i].title);
      skills_content.eq(i).find(".skills-subtitle").html(content[i].subtitle);
      let skills_list = skills_content.eq(i).find(".skills-list").children();
      for (let j = 0; j < content[i].data.length; j++) {
        skills_list.eq(j).find(".skills-name").html(content[i].data[j].name);
        skills_list.eq(j).find(".skills-number").html(content[i].data[j].number);
      }
    }
  }
  setSkills(jsonData.skills_content);

  // Qualification
  $(".qualification section__title").html(jsonData.qualification_title);
  $(".qualification section__subtitle").html(jsonData.qualification_subtitle);
  function setQualification(tabs) {
    console.log(tabs);
    let qualification_tabs = $(".qualification-tabs").children();
    let qualification_content = $(".qualification-sections").children();
    for (let i = 0; i < tabs.length; i++) {
      qualification_tabs
        .eq(i)
        .find(".qualification-tabs-button")
        .html(tabs[i].name);
      let qualification_data = qualification_content.eq(i).children();
      for (let j = 0; j < tabs[i].data.length; j++) {
        qualification_data
          .eq(j)
          .find(".qualification-title")
          .html(tabs[i].data[j].title);
        qualification_data
          .eq(j)
          .find(".qualification-subtitle")
          .html(tabs[i].data[j].subtitle);
        qualification_data
          .eq(j)
          .find(".qualification-calender")
          .html(tabs[i].data[j].calender);
      }
    }
  }
  setQualification(jsonData.qualification_tabs);

  // Experience
  $(".experiences .section__title").html(jsonData.experience_title);
  $(".experiences .section__subtitle").html(jsonData.experience_subtitle);
  function setExperiences(content) {
    let experience_content = $(".experiences__container").children();
    for (let i = 0; i < content.length; i++) {
      experience_content
        .eq(i)
        .find(".experiences__title")
        .html(content[i].title);
      experience_content
        .eq(i)
        .find(".experiences__subtitle")
        .html(content[i].subtitle);
      let experience_box = experience_content
        .eq(i)
        .find(".experiences__box")
        .children();
      for (let j = 0; j < content[i].data.length; j++) {
          experience_box
            .eq(j)
            .find(".experiences__name")
            .html(content[i].data[j].name);
          experience_box
            .eq(j)
            .find(".experiences__level")
            .html(content[i].data[j].level);
      }
    }
  }
  setExperiences(jsonData.experience_content);

  // Works
  $("#work .section__subtitle").html(jsonData.my_portfolio);
  $("#work .section__title").html(jsonData.recent_projects);
  $("#work .work__filters").children().eq(0).html(jsonData.all);
  $("#work .work__filters").children().eq(1).html(jsonData.web);
  $("#work .work__filters").children().eq(2).html(jsonData.backend);
  $("#work .work__filters").children().eq(3).html(jsonData.blockchain);

  // Contact
  $("#contact .section__title").html(jsonData.contact_me);
  $("#contact .section__subtitle").html(jsonData.get_in_touch);
  $(".contact__container")
    .children()
    .eq(0)
    .find(".contact__title")
    .html(jsonData.popular_links);

  function setContactBox(index, text) {
    let root = $(".contact__container")
      .children()
      .eq(0)
      .find(".contact__info")
      .children()
      .eq(index);
    root.find(".contact__card-title").html(text);
    let clone = root.find(".contact__button").children().eq(0).clone();
    nodeValue = root
      .find(".contact__button")
      .html(jsonData.write_me)
      .append(clone);
  }
  setContactBox(0, jsonData.email);
  setContactBox(1, jsonData.linked_in);
  setContactBox(2, jsonData.x);
  $(".contact__container")
    .children()
    .eq(1)
    .find(".contact__title")
    .html(jsonData.send_direct_message);
  $(".contact__form")
    .children()
    .eq(0)
    .find(".contact__form-tag")
    .html(jsonData.form_name);
  $(".contact__form")
    .children()
    .eq(1)
    .find(".contact__form-tag")
    .html(jsonData.form_email);
  $(".contact__form")
    .children()
    .eq(2)
    .find(".contact__form-tag")
    .html(jsonData.form_subject);
  $(".contact__form")
    .children()
    .eq(3)
    .find(".contact__form-tag")
    .html(jsonData.form_message);
  $("#send_email").html(jsonData.send_message);
  $("#client_email").attr("placeholder", jsonData.email_hint);
  $("#client_subject").attr("placeholder", jsonData.subject_hint);
  $("#client_message").attr("placeholder", jsonData.message_hint);

  $(".footer__list")
    .children()
    .eq(0)
    .find(".footer__link")
    .html(jsonData.about);
  $(".footer__list")
    .children()
    .eq(1)
    .find(".footer__link")
    .html(jsonData.projects);
  $(".footer__list")
    .children()
    .eq(2)
    .find(".footer__link")
    .html(jsonData.experience);
  $(".footer__copyright").html(jsonData.copyright);
}

$("form").submit((event) => {
  event.preventDefault();
  //window.open('mailto:test@example.com?subject=subject&body=body')
  sendMail();
});

function sendMail() {
  var link =
    "mailto:amulyavarshney7@gmail.com" +
    `?cc=${$("#client_email").val()}` +
    "&subject=" +
    encodeURIComponent(`${$("#client_subject").val()}`) +
    "&body=" +
    encodeURIComponent(`${$("#client_message").val()}`);

  window.location.href = link;
}
