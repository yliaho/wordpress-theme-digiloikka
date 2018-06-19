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

- [Read how timber works](https://timber.github.io/docs/).
- This project is a modified version [Timber's starter theme](https://github.com/timber/starter-theme).

### Advanced Custom Fields

- This theme uses [Advanced Custom Fields PRO](https://www.advancedcustomfields.com/) extensively.
- ACF is required and configured in `functions.php` from theme's `/plugins/` folder. No need to use WP Admin or upload plugins via FTP.
- As you edit fields in the ACF control panel, each update activates a hook that saves the fields to a json in `/acf/` folder. This helps with version controlling the data types and reduces the amount of database calls. You can read more about local JSON reads with ACF [in their docs](https://www.advancedcustomfields.com/resources/local-json/)
- Right now the method above doesn't cover the actual value in their respective fields. You need to manually create each page covered in the theme and ACF rules, and write the values yourself.
