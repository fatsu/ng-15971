# 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help


Reproduction for issue:

Change Detection not triggered when HTTP returns.

Angular.io (https://angular.io/docs/ts/latest/guide/template-syntax.html) states: 
"Angular executes template expressions after every change detection cycle. Change detection cycles are triggered by many asynchronous activities such as promise resolutions, http results, timer events, keypresses and mouse moves."

Problem:
When navigating to 'http://localhost:4200', the component shows 'asm works', and does not change when a (timed) http get is called after 4s.

Expected: 
Expected to see "data Received!".