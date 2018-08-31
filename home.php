<?php
/**
 * Template name: Homepage
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['home.twig'];
Timber::render($templates, $context);


