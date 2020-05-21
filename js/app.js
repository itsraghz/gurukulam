"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_1 = require("./about");
var home_1 = require("./home");
var contact_1 = require("./contact");
var lit_html_1 = require("lit-html");
var rootDiv = document.getElementById("root");
var routes = {
    "/": home_1.home,
    "/contact": contact_1.contact,
    "/about": about_1.about,
};
var onNavigate = function (pathname) {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    lit_html_1.render(routes[pathname], rootDiv);
};
window["onNavigate"] = onNavigate;
window.onpopstate = function () {
    lit_html_1.render(routes[window.location.pathname], rootDiv);
};
// Default Page Load
console.log(window.location.pathname);
lit_html_1.render(routes[window.location.pathname], rootDiv);
