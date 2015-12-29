# Play GB Client

Play Gameboy in the cloud! With other humans!

Inspired by Twitch plays Pokémon and [weplay](https://github.com/rauchg/weplay),
but mostly created as a project to learn [redux](http://redux.js.org/).

## Installation

Basically:

```bash
$ npm install
```

You also need to run the Play GB Server, and set some environment variables:

* TITLE - The title of your page, defaults to `Play Pokémon`
* SERVER_URI - URI of the Play GB Server, defaults to `localhost:8090`

## Development

Uses [webpack](https://webpack.github.io/) and [babel](https://babeljs.io/) for
awesomeness like es2015 and live reloading. To start the dev server, run:

```bash
$ npm run dev
```

and navigate to
[http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)

## Deploy

To bundle everything for production use, run:

```bash
$ npm run build
```

Everything should now be bundle up nicely in `dist/bundle.js`, and loaded by
`dist/index.html`.
