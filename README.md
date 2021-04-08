# Basic React Scripts

[![npm version](https://badge.fury.io/js/basic-react-scripts.svg)](https://badge.fury.io/js/basic-react-scripts)

A simple cli to bootstrap build and development server for JavaScript with React bundle.

```bash
yarn add basic-react-scripts
```

## Create source files

In the project's root folder, create the source files with the structure:

```js
/src
  index.html
  index.jsx
```

If using typescript:

```js
/src
  index.html
  index.tsx
```

`index.html`:

Just a regular html file with a div with id = "app"

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Title_of_your_project_here</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>

<body>
  <div id="app"></div>
</body>

</html>
```

`index.js` or `index.tsx`:

Inserting the React code into a div with id = "app".

```js
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>Hello, World</h1>, document.getElementById('app'));
```

## Commands:

To use this library to build and start a developer server, add this scripts on the **package.json** file:

```js
"scripts": {
    "start": "basic-react-scripts start",
    "build": "basic-react-scripts build",
  },
```

To support typescript:
```js
"scripts": {
    "start": "basic-react-scripts start --ts",
    "build": "basic-react-scripts build --ts",
  },
```
### Flags

| flag | command description      |
| ---- | -------------------------|
| --ts | enable typescript parser |