# Simple Todo app

A simple Todo application created with PowerJS. 

## Getting Started

Clone this repo
```
git clone https://github.com/power-js/todo-app.git
```

Track this repo
```
git remote add upstream https://github.com/power-js/todo-app.git
```

Get the latest and update your local copy
```
git fetch upstream
git push origin master
```

## Install Dependencies

```
npm i
```

That's it! Your development environment is ready to go! You can launch your local development server via `npm`.

```
npm start
```

## Testing

* `npm run test` - single run
* `npm run test:watch` - watches for changes
* `npm run test:coverage` - executes tests and launches a coverage report

To test individual files

```
jest src/index.test.js
```

## Production

Running `npm run build` will create production ready application into your `dist` folder.

## Technologies
The various technologies used in the sample Todo app.

* SASS & Stylelint
* PostCSS & Autoprefixer
* ESLint & Prettier
* Babel 7
* Webpack 4
* Jest & Enzyme
