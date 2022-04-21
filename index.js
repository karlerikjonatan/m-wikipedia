"use strict";

const hash = window.location.hash;
const pathname = window.location.pathname;
const protocol = window.location.protocol;

const lang = document.querySelector("html").lang;

window.location.replace(`${protocol}//${lang}.m.wikipedia.org${pathname}${hash}`);
