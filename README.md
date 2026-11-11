# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - News homepage solution](#frontend-mentor---news-homepage-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Tested With](#tested-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/screenshot.png)

### Links

- Solution URL: [https://github.com/pangm1/FrontEndMentor-News-Homepage_pangm1](https://github.com/pangm1/FrontEndMentor-News-Homepage_pangm1)
- Live Site URL: [https://frontendmentor-news-homepagepangm1.vercel.app](https://frontendmentor-news-homepagepangm1.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- HTML Dialog + invoker commands
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- WAI-ARIA
- SVG Manipulation through CSS

### Tested With

- NVDA
- keyboard-only
- mouse
- Google Chrome Devtools

### What I learned

HTML:

- creating and putting navigation inside the ```header``` element
- using ```dialog``` element for the navigation and controlling interaction with it using invoker commands on buttons, also making links behave like buttons and vice versa
- controlling tabbing order, roles, and other ARIA attributes to mark how elements appear in the accessibility tree and to screenreaders
- Making 'Read More' buttons describe the article to screenreaders
- Using hidden titles to label sections to screenreaders

CSS:

- controlling layout of ```header```, ```main```, and ```footer``` elements to create a complete webpage layout
- using a counter to style a list with incremental custom content
- styling navigation as a modal dialog, styling dialog backdrop
- using background masking to use SVGs without putting the SVG code directly in the HTML
- making a ```dialog``` element display with no interaction to open and close (as if it wasn't a dialog), styling backdrop as if it didn't exist
- getting rid of list marker content to keep list functionality
- styling grids with spanning elements
- using position anchors

Javascript:

- querying stylesheets
- media query events
- using ```role=presentation``` to hide elements from accessibility tree using Javascript

### Continued development

I hope to utilize these techniques for the future, where I don't have to reinvent them, and incorporate them into bigger projects and frameworks. I also want to get familiar with the in-built browser APIs so I can be able to manipulate CSS and HTML through Javascript with more control.

### AI Collaboration

I used Google AI a lot to find out solutions to small problems I had.

## Author

- Frontend Mentor - [@pangm1](https://www.frontendmentor.io/profile/pangm1)
