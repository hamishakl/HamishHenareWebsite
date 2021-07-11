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
        <a href="${element.html_url}" class="dribble-button url-link-button">
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
        <a class="dribble-link" href="${element.html_url}">
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
        <a href="${element.html_url}" class="dribble-button url-link-button">
        info
        </a>
               <div class="dribble-link" href="${element.html_url}">
                <div class="dribble-item">
                <p class="dribble-text">${element.title}</p>
                <img class="dribble-image" src="${element.images.hidpi}"/>
                </div>
        </div>
              `
      } else {
        return `
                <a class="dribble-link" href="${element.html_url}">
                <div class="dribble-item">
                <p class="dribble-text">${element.title}</p>
                <img class="dribble-image" src="${element.images.hidpi}"/>
                </div>
                </a>
              `;
      }
    }ho
  }
};

const getDribbleDimensions = () => {
  const imageHeight =
        document.getElementsByClassName("dribble-image")[0].height;
  const dribbleShotsAmount = document.getElementsByClassName('dribble-image').length

  const arr = [imageHeight, dribbleShotsAmount]

  return arr
}

window.onload = () => {
  apiLoad()
};
