"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIsLoading = setIsLoading;

function setIsLoading(state) {
  var spinner = document.querySelector(".spinner");

  if (!state) {
    spinner.style.display = "none";
  }
}