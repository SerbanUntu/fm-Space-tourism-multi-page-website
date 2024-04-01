# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users are able to:

- ✔️ View the optimal layout for each of the website's pages depending on their device's screen size
- ✔️ See hover states for all interactive elements on the page
- ✔️ View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

### Links

- [Solution]()
- [Live Site](https://fm-space-tourism-multi-page-website-blue.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Nuxt.js](https://nuxt.com/) - Vue framework
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

Dynamic destination titles based on page names:
```html
<h2 class="uppercase">{{ route.path.split('/')[2] }}</h2>
```

### Continued development

### Useful resources

- [Vue docs](https://vuejs.org/guide/introduction)
- [Cool Tailwind video](https://www.youtube.com/watch?v=pfaSUYaSgRo)
- The Mozilla references for [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) are always useful.

## Author

- LeetCode - [@SerbanUntu](https://leetcode.com/SerbanUntu/)
- Github - [@SerbanUntu](https://github.com/SerbanUntu)
- Frontend Mentor - [@SerbanUntu](https://www.frontendmentor.io/profile/SerbanUntu)