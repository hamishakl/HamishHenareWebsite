const apiLoad = () => {
  const accessToken =
    "88a8d38855edc06b5bf5e20ae720ca304ee7edcb5858491b1eeafdf3c8be8f9c";

  const dribbleWrapper = document.getElementById("dribble-wrapper");
  fetch(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.length > 0) {
        data.forEach((element) => {
          dribbleWrapper.innerHTML += webOrPrint(element);
        });
      }
      loadingScreen();
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

const webOrPrint = (element) => {
  const mql = window.matchMedia("(hover: hover)");
  const tags = element.tags;
  for (let i = 0; i < tags.length; i++) {
    if (tags.includes("web")) {
      if (mql.matches === false) {
        return `
        <div class="dribble-wrapper">
        <a href="${element.html_url}" class="dribble-button url-link-button" target="_blank">
        info
        </a>
               <div class="dribble-link" href="${element.html_url}">
                <div class="dribble-item">
                <p class="dribble-text">${element.title}</p>
                <img class="dribble-image" src="${element.images.hidpi}"/>
                </div>
        </div>
              `;
      } else {
        return `
        <a class="dribble-link" href="${element.html_url}" target="_blank">
                <div class="dribble-item">
                <p class="dribble-text">${element.title}</p>
                <img class="dribble-image" src="${element.images.hidpi}"/>
                </div>
                </a>
        `;
      }
    } else {
      if (mql.matches === false) {
        return `
        <div class="dribble-wrapper">
        <a href="${element.html_url}" class="dribble-button url-link-button" target="_blank">
        info
        </a>
               <div class="dribble-link" href="${element.html_url}">
                <div class="dribble-item">
                <p class="dribble-text">${element.title}</p>
                <img class="dribble-image" src="${element.images.hidpi}"/>
                </div>
        </div>
              `;
      } else {
        return `
                <a class="dribble-link" href="${element.html_url}" target="_blank">
                <div class="dribble-item">
                <p class="dribble-text">${element.title}</p>
                <img class="dribble-image" src="${element.images.hidpi}"/>
                </div>
                </a>
              `;
      }
    }
  }
};

const getDribbleDimensions = () => {
  const dribbleShotsHeight =
    document.getElementById("dribble-wrapper").clientHeight;
  return dribbleShotsHeight;
};

const loadingScreen = () => {
  const loader = (document.getElementById("loading-wrapper"))

  if (getDribbleDimensions() !== 0) {
    setTimeout(function () {
      loader.style.opacity = "0";
      
      if (loader.style.opacity == "0") {
        setTimeout(() => {
          loader.style.display = "none";
        }, 300);
      }
    }, 500);
  }
};

window.onload = () => {
  apiLoad(), getDribbleDimensions(), navbarAdjust();
};
