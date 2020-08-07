when node cli.js is attempted the server states can find module.
-attempting npm install of packages.
added files but still throwing error cant find modules.
in cli file fixed directory issue

i have gone over all the solved files and compared them to unsolved as well as live coded
but i cant get the program to run.

Dales-MacBook-Air:Unsolved dalerussell$ node CLI.js admin
internal/modules/cjs/loader.js:985
  throw err;
  ^

Error: Cannot find module 'moment'
Require stack:
- /Users/dalerussell/Documents/GitHub/activityreview/weather_activities/Unsolved/WeatherAdmin.js
- /Users/dalerussell/Documents/GitHub/activityreview/weather_activities/Unsolved/CLI.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:982:15)
    at Function.Module._load (internal/modules/cjs/loader.js:864:27)
    at Module.require (internal/modules/cjs/loader.js:1044:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at Object.<anonymous> (/Users/dalerussell/Documents/GitHub/activityreview/weather_activities/Unsolved/WeatherAdmin.js:3:16)
    at Module._compile (internal/modules/cjs/loader.js:1158:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
    at Module.load (internal/modules/cjs/loader.js:1002:32)
    at Function.Module._load (internal/modules/cjs/loader.js:901:14)
    at Module.require (internal/modules/cjs/loader.js:1044:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/dalerussell/Documents/GitHub/activityreview/weather_activities/Unsolved/WeatherAdmin.js',
    '/Users/dalerussell/Documents/GitHub/activityreview/weather_activities/Unsolved/CLI.js'
  ]
}