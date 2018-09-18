<?php
/**
 * Template name: Homepage
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['stadi_logo'] = get_field('stadi_logo', 'options');


$templates = ['home.twig', 'footer.twig', 'department.twig'];
Timber::render( $templates, $context);


