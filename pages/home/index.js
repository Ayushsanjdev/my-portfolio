const app = document.querySelector("#app");
const nav = document.querySelector("#nav");

console.log("testing");
const routeConfig = {
  "/pages/home": {
    linkLabel: "Home",
    content: `I am in home page`,
  },
  "/pages/about": {
    linkLabel: "About",
    content: `I am in about page`,
  },
  "/pages/contact": {
    linkLabel: "Contact",
    content: `I am in contact page`,
  },
};

const renderNavLinks = () => {
  const navFragment = document.createDocumentFragment();

  Object.keys(routeConfig).forEach((route) => {
    const { linkLabel } = routeConfig[route];

    const linkElement = document.createElement("a");
    linkElement.href = route;
    linkElement.textContent = linkLabel;
    linkElement.className = "nav-link";
    navFragment.appendChild(linkElement);
  });

  nav.append(navFragment);
};

renderNavLinks();

const handleNavEvents = () => {
  nav.addEventListener("click", (e) => {
    console.log("clicked");
  });
};
