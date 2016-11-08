/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    app:                          '/app', // 'dist',
    '@types':                     '/node_modules/@types',
    '@angular':                   '/node_modules/@angular',
    'angular2-in-memory-web-api': '/node_modules/angular2-in-memory-web-api',
    'rxjs':                       '/node_modules/rxjs',
    'plugin-typescript':          '/node_modules/plugin-typescript',
    'typescript':                 '/node_modules/typescript',
    'stocks':                    '//localhost:8080'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'typescript'                : { main: 'lib/typescript.js', defaultExtension: 'js' },
    'plugin-typescript'         : { main: 'lib/plugin.js', defaultExtension: 'js'},
    'stocks'                    : { defaultExtension: "js" }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  //packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    path: {
        // paths serve as alias
        'npm:': '/node_modules/'
    },
    map: map,
    packages: packages,
    meta: {
      '*': {
            authorization: true
      },
      'stocks': {
            format: "cjs",
            deps: [],
            crossorigin: 'anonymous'
      }
    }
  };

  System.config(config);
  System.import("stocks/components/app.module.js");

})(this);
