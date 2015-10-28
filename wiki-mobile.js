'use strict';

var protocol = window.location.protocol;
var pathname = window.location.pathname;
var hash = window.location.hash;

var lang = document.querySelector('html').lang;

window.location.replace(protocol + '//' + lang + '.m.wikipedia.org' + pathname + hash);