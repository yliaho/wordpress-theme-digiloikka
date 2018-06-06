# Digiloikka

> WordPress theme for Digitalents Helsinki

## Install

- Place the root folder to WordPress' `wp-content/themes`
- Run `composer install` to install timber dependencies
- Run `yarn` to install node_dependencies
- `yarn run build` once to compile distribution
- Activate the theme in WP Admin

## Development

### Javascript

- `yarn run watch` to run webpack in watch mode. See `webpack.config.js` for details
- This project uses typescript and sass that compiles to javascript and css respectively. **`/src/` contains files for development.** Webpack compiles them to bundles in `/static/`. We require these bundles via `functions.php`.

### Timber, Twig, PHP

- [Read how timber works](https://timber.github.io/docs/)
- This project is a modified version [Timber's starter theme](https://github.com/timber/starter-theme).

### Advanced Custom Fields and XML Import

> This theme uses Advanced Custom Fields Pro extensively. In order for the theme to work properly, this needs to be installed

- Open `/plugins` directory contained within this repo.
- Copy & paste `/advanced-custom-fields-pro` to your wordpress installation's `wp-content/plugins`
- Import `digitalents.wordpress.2018-06-06.xml` file using Wordpress admin panel by navigating to `Tools > Import`. You might need to install the WordPress import component from this page before you're able to import the XML.
