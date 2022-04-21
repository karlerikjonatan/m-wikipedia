"use strict";

const { hash, pathname, protocol } = window.location;
const lang = document.querySelector("html").lang;
const url = `${protocol}//${lang}.m.wikipedia.org${pathname}${hash}`;

window.location.replace(url);
