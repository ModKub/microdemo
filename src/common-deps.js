window.SystemJS = window.System;

function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement("script");
  newScript.type = "systemjs-importmap";
  newScript.text = JSON.stringify(newMapJSON);
  const allMaps = document.querySelectorAll(
    'script[type="systemjs-importmap"]'
  );

  allMaps[allMaps.length - 1].insertAdjacentElement("afterEnd", newScript);
}

const devDependencies = {
  imports: {
    react:
      "https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.development.js",
    "react-dom":
      "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.development.min.js",
    "react-dom/server":
      "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.development.min.js",
    "single-spa":
      "https://cdnjs.cloudflare.com/ajax/libs/single-spa/5.0.0/umd/single-spa.min.js",
    lodash:
      "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js",
    rxjs: "https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.4/rxjs.umd.min.js",
    typescript:
      "https://cdnjs.cloudflare.com/ajax/libs/typescript/3.8.2/typescript.min.js",
    redux: "https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js",
    "react-redux":
      "https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.2.0/react-redux.min.js"
    // "@material-ui/core": () => require("@material-ui/core")
  }
};

const prodDependencies = {
  imports: {
    react:
      "https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js",
    "react-dom":
      "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js",
    "react-dom/server":
      "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js",
    "single-spa":
      "https://cdnjs.cloudflare.com/ajax/libs/single-spa/5.0.0/umd/single-spa.min.js",
    lodash:
      "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js",
    rxjs: "https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.4/rxjs.umd.min.js",
    typescript:
      "https://cdnjs.cloudflare.com/ajax/libs/typescript/3.8.2/typescript.min.js",
    "react-redux":
      "https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.2.0/react-redux.min.js"
  }
};

const devMode = true; // you will need to figure out a way to use a set of production dependencies instead
if (devMode) {
  insertNewImportMap(devDependencies);
} else {
  insertNewImportMap(prodDependencies);
}
