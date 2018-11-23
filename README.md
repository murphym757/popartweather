# react-template

This project is meant to serve as a ready-to-go React app. With the purpose of reducing the stress setup process.


### Prerequisites

Clone the repository:

```
git clone https://github.com/murphym757/react-template
```

Rename the react-template folder to whatever you'd like.

Using a terminal, navigate to the that folder and run this code to remove the current repository:

```
rm -rf .git
```

Then create your own repository via the git-cli:

```
git init
```

### Installing

Install all of the project's node modules via:

```
npm install
```

Transpile the component source files

```
npm run transpile
```

compile the component source files

```
npm run build
```

## Testing the code

```
npm start
```
The server is set to 3000, so navigate in your web browser to,http://localhost:3000/. Don't forget to press ctrl+c to close. From there, you can make whatever changes you'd like. Howeever, you must repeat the transpile and build stages again.


### Styling

Everything in the assets folder can be changed to your liking.

### Deployment

Publish your newly created repository to GitHub. 

This project was created with deploying to Heroku in mind.

* Simply create a Heroku account.
* On Heroku, create a new app and add GitHub as a deployment method. Enable automatic deploys on that pipeline.

Install the [Heroku-Cli](https://devcenter.heroku.com/articles/heroku-cli).

```
npm install -g heroku
```

Please place this line of code in the heroku-cli to ensure that the devDependencies are installed properly:

```
heroku config:set NPM_CONFIG_PRODUCTION=false --app yourappname
```

On your app's Heroku deploy page, manually deploy the branch. From there, the app should be fully functional now.

## Built With

* [React](https://reactjs.org/tutorial/tutorial.html) - Front-end framework
* [Webpack](https://webpack.js.org/guides/getting-started/) - JavaScript bundler
* [Babel](https://babeljs.io/docs/en/) - JavaScript compiler
* [Node.js](https://nodejs.org/en/) - Backend framework
* [Bootstrap](https://getbootstrap.com/) - Front-end component library
* [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) - PaaP host

## Authors

* **Maurice Murphy** - *Initial work* - [murphym757](https://github.com/murphym757)

See also the list of [contributors](https://github.com/murphym757/react-template/graphs/contributors) who participated in this project.

## Acknowledgments

* [Steps for setting up Webpack 4 via React](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220)
* [How to make Webpack and Heroku work together](https://medium.com/@adityaa803/how-to-deploy-webpack-node-based-app-to-heroku-f55437602a3e)
