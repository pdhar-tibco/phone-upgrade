/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    app:                          "/app", // "dist",
    "@angular/core"              : "npm:@angular/core/bundles/core.umd.js",
    "@angular/common"            : "npm:@angular/common/bundles/common.umd.js",
    "@angular/compiler"          : "npm:@angular/compiler/bundles/compiler.umd.js",
    "@angular/platform-browser"  : "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
    "@angular/http"              : "npm:@angular/http/bundles/http.umd.js",
    "@angular/router"            : "npm:@angular/router/bundles/router.umd.js",
    "@angular/forms"             : "npm:@angular/forms/bundles/forms.umd.js",
    "@angular/upgrade"           : "npm:@angular/upgrade/bundles/upgrade.umd.js",
    "@angular/upgrade/static"    : "npm:@angular/upgrade/bundles/upgrade-static.umd.js",
    "@types"                     : "npm:@types",
    "angular-in-memory-web-api"  : "npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js",
    "rxjs"                       : "npm:rxjs",
    "plugin-typescript"          : "npm:plugin-typescript",
    "typescript"                 : "npm:typescript",
    "jquery"                     : "bower:jquery",
    "angular"                    : "bower:angular",
    "angular-animate"            : "bower:angular-animate",
    "angular-resource"           : "bower:angular-resource",
    "angular-route"              : "bower:angular-route",
    "core-js"                    : "npm:core-js",
    "zone-js"                    : "npm:zone.js",
    "stocks"                     : "//localhost:8080",
    css                          : "/node_modules/systemjs-plugin-css/css.js",
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    "app"                       : { main: "main.js",  defaultExtension: "js" },
    "rxjs"                      : { defaultExtension: "js" },
    "typescript"                : { main: "lib/typescript.js", defaultExtension: "js" },
    "plugin-typescript"         : { main: "lib/plugin.js", defaultExtension: "js"},
    "jquery"                    : { main: "dist/jquery.js", defaultExtension: "js"},
    "angular"                   : { main: "index.js" , defaultExtension: "js"},
    "angular-animate"           : { main: "angular-animate.js" , defaultExtension: "js"},
    "angular-resource"          : { main: "angular-resource.js" , defaultExtension: "js"},
    "angular-route"             : { main: "angular-route.js" , defaultExtension: "js"},
    "core-js"                   : { main: "index.js", defaultExtension: "js"},
    "zone-js"                   : { main: "dist/zone.js", defaultExtension: "js"},
    "stocks"                    : { 
          main: "client/components/app.module.js",
          format: "cjs", 
          exports: "stocks",
          defaultExtension: "js" }
  };

  // var ngPackageNames = [
  //   "common",
  //   "compiler",
  //   "core",
  //   "forms",
  //   "http",
  //   "platform-browser",
  //   "platform-browser-dynamic",
  //   "router",
  //   "router-deprecated",
  //   "upgrade",
  //   "upgrade-static"
  // ];

  // // Individual files (~300 requests):
  // function packIndex(pkgName) {
  //   packages["@angular/"+pkgName] = { main: "index.js", defaultExtension: "js" };
  // }

  // // Bundled (~40 requests):
  // function packUmd(pkgName) {
  //   packages["@angular/"+pkgName] = { main: "/bundles/" + pkgName + ".umd.js", defaultExtension: "js" };
  // }

  // // Most environments should use UMD; some (Karma) need the individual index files
  // var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // // Add package entries for angular packages
  // ngPackageNames.forEach(setPackageConfig);



  var config = {
    paths: {
        // paths serve as alias
        "npm:"           : "/node_modules/",
        "bower:"         : "/app/bower_components/",
        // "stocks"         : "//localhost:8080"
    },
    map: map,
    packages: packages,
    meta: {
      "*": {
            authorization: true
      },
      "*.css":{
          loader: "css"
      }
    }
  };

  System.config(config);
// No need to do special import as it is done 
// from app.module.ts using import { AppModule as stocks } from "stocks/client/components/app.module";
// "stocks" is mapped by the SystemJS loader
//   System.import("stocks").then(function(m) {
//     // do something with "m"
// });;
// No need to import css as it is getting imported
// when you import the StocksModule
// System.import("stocks/client/css/app.css");

})(this);
