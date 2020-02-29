# Calendar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Run 

Donwload project and run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Components

## Calendar component

Draws a calendar and recives an object called options with the structure:

``json
    {
      currentWeekDay: date.getDay(),
      currentDay: date.getDate(),
      dayMonthNumbers: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
      currentMonth: date.getMonth()
    }
`` 

### HTML

``html
<app-calendar [options]="calendarOptions"></app-calendar>
``

## Row Calendar

Draws Items Calendar by a parameter called events(Items to draw), the actions in the buttons and info to show are recived by a parameter called options, this one is a object like this:

``json
    {
      day: 10,
      month: 1,
      year: 2020,
      action: this.actionEvent.bind(this)
    }
``

This component manage the delete all option

### HTML

``html
<app-row-calendar [events]="dataShow" [options]="rowCalendarOptions"></app-row-calendar>
``

## Item Calendar

Draw a card with the item information. It receives two parameters. Options witch are the action on buttons and the Item with the data.

### HTML

``html
<app-item-calendar [item]="item" [options]="options"></app-item-calendar>
``

## Form Calendar

Form who emits an object with the data to save. The object looks like:

``json
    {
      action: 'save',//action to do
      mode: mode,// current mode add, edit
      data: saveObject// object to save
   }
``

### HTML

``html
<app-form-calendar (returnActionEmiter)="returnToCalendar($event)"></app-form-calendar>
``
