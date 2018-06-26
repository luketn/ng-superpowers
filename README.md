# NgSuperpowers

### Angular Materialize
Let's add some style!

Install the dependencies
```
npm install jquery@^3.3.1 hammerjs materialize-css angular2-materialize --save
```

Add the scripts (angular.json)
```
"scripts": [ 
    "node_modules/jquery/dist/jquery.js",
    "node_modules/hammerjs/hammer.js",
    "node_modules/materialize-css/dist/js/materialize.js"
]
```

Import the SASS (styles.scss):
```
$roboto-font-path: "../node_modules/materialize-css/dist/fonts/roboto/";
@import '../node_modules/materialize-css/sass/components/_color';

$primary-color: color("green", "lighten-2");
$secondary-color: color("indigo", "lighten-1") !default;

@import '../node_modules/materialize-css/sass/materialize';
```

Grab the fonts (index.html):
```
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Import the module (app.module.ts):
```
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  ..
  imports: [
      ..
    MaterializeModule
  ]
```

Add the directive import to a component (e.g. app.component.ts):
```
import {MaterializeDirective} from "angular2-materialize";
```

And get materializing!

Ref: https://infomedialtd.github.io/angular2-materialize/#/Buttons