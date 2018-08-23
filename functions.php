<?php
require_once( __DIR__ . '/vendor/autoload.php' );

$timber = new Timber\Timber();
Timber::$dirname = ['templates', 'views'];

show_admin_bar( false );

class Digiloikka extends Timber\Site {
	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_image_size("proff", 400, 260, true);
		add_image_size("proff1", 480, 650, true);
		add_theme_support( 'menus' );
		register_nav_menu("navbar", "Nav Bar");
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );

		add_action( 'wp_enqueue_scripts', [ $this, 'theme_scripts']);

		// ACF Pro
		add_filter('acf/settings/path', [ $this, 'my_acf_settings_path' ]);
		add_filter('acf/settings/dir', [ $this, 'my_acf_settings_dir' ]);
		add_filter('acf/settings/save_json', [ $this, 'my_acf_json_save_point' ]);
		add_filter('acf/settings/load_json', [ $this, 'my_acf_json_load_point' ]);
		include_once( get_stylesheet_directory() . '/plugins/advanced-custom-fields-pro/acf.php' );
		// If you want to disable the ACF panel from WP Admin, uncomment the line below.
		// add_filter('acf/settings/show_admin', '__return_false');

		parent::__construct();
	}

	function diginav(){  
		add_theme_support("title-tag"); //this displays the page title on the tab
	   
		
		add_action("init", "diginav");
	}
	
	

	function theme_scripts() {
		wp_enqueue_style( 'themestyle', get_template_directory_uri() . '/static/main.css' );
		wp_enqueue_script( 'themescript', get_template_directory_uri() . '/static/site.bundle.js', array(), true );

		add_action( 'elementor/frontend/after_enqueue_styles', [ $this, 'widget_styles' ] );
	}

	function widget_styles() {

		wp_enqueue_style( 'elementor-custom', get_template_directory_uri() . '/static/elementor-custom.css' );
	}

	function my_acf_settings_path() {
		$path = get_template_directory_uri() . '/plugins/advanced-custom-fields-pro/';

		return $path;
	}

	function my_acf_settings_dir( $dir ) {
		$dir = get_template_directory_uri() . '/plugins/advanced-custom-fields-pro/';

		return $dir;
	}

	function my_acf_json_save_point( $path ) {
  	$path = get_stylesheet_directory() . '/acf';
    
  	return $path;    
	}

	function my_acf_json_load_point( $path ) {
		unset($paths[0]);

		$paths[] = get_stylesheet_directory() . '/acf';

		return $paths;
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['menu'] = new TimberMenu("nav");
		$context['site'] = $this;

		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

}

new Digiloikka();