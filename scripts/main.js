const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const navMenu = document.getElementById("menu-list");

const mainStylesheet = document.getElementById("main-styles").sheet;

const mediaQuery = window.matchMedia(Array.from(mainStylesheet.cssRules).filter(r => {
    return r instanceof CSSMediaRule && r.media.mediaText.includes("width");
})[0].media.mediaText);

mediaQuery.onchange = determineMenuButtons;
window.addEventListener("load", determineMenuButtons);


// console.log(document);
// console.log(mainStylesheet);
// console.log(mediaQuery);

function determineMenuButtons() {
    const matches = mediaQuery.matches;
    
    if (matches) {
        openNav.tabIndex = -1;
        closeNav.tabIndex = -1;
        openNav.setAttribute("aria-hidden", "true");
        closeNav.setAttribute("aria-hidden", "true");
        navMenu.setAttribute("role", "presentation");
    }
    else {
        openNav.tabIndex = 0;
        closeNav.tabIndex = 0;
        openNav.setAttribute("aria-hidden", "false");
        closeNav.setAttribute("aria-hidden", "false");
        navMenu.setAttribute("role", "");
    }
    // console.log(openNav.tabIndex, closeNav.tabIndex);
}