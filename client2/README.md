# JGMC - Student Managment

## Intro
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

It uses Sass (with .scss). The styles are loaded at the template level with `node-sass-chokidar` css preprocessor

Dependencies are handled by **npm**.

## Directories
JGMC-Student-Information-React#v0.1.0
├── public/         (static files)
│   ├── assets/         (assets)
│   ├── favicon.ico  
│   └── index.html      (html temlpate)
│
├── src/            (project root)
|   ├── assets          (assets)
│   ├── containers/     (container source)
│   ├── scss/           (scss/css source)
│   ├── views/          (views source)
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── _nav.js         (sidebar config)
│   └── routes.js       (routes config)
│
└── package.json

## Usage
`npm install` - to install dependencies

Sctipts
`npm start` for developing (it runs webpack-dev-server)
`npm run build` to run a dev build

See also
[Create-React-App](CRA.md)

Thanks
The frontend development is inspired by CoreUI-React