const heroChange = () => {
  const heading = document.getElementById("hero-text");
  const yPosition = window.scrollY;
  if (yPosition > 250) {
    heading.style.color = "#1e3d59";
  } else if (yPosition < 200) {
    heading.style.color = "white";
  }
};

const navbarChange = () => {
  const y = window.scrollY;
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  const vh2 = vh * 2;
  const navbar = document.getElementById("navbar");
  const links = document.getElementsByClassName("navbar-link"); // get all links
  const linkColor = (a) => {
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = a;
    }
  };
  if (y >= vh && y < vh2) {
    navbar.style.backgroundColor = "#f5f0e1";
    navbar.style.color = "black";
    navbar.style.borderColor = "black";
    linkColor("black");
  } else if (y > vh2) {
    navbar.style.borderColor = "white";
    navbar.style.color = "white";
    navbar.style.backgroundColor = "#1e3d59";
    linkColor("white");
  } else {
    navbar.style.borderColor = "white";
    navbar.style.color = "white";
    navbar.style.backgroundColor = "#1e3d59";
    linkColor("white");
  }
};

// const a = document.getElementById("work-section")

// const textPath = document.querySelector("#text-path");

// const h = document.documentElement,
//       b = document.body,
//       st = 'scrollTop',
//       sh = 'scrollHeight';

// document.addEventListener("scroll", e => {
//   let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
//   textPath.setAttribute("startOffset", (-percent * 40) + 1200)
// });

window.onscroll = () => {
  navbarChange(), heroChange();
};
