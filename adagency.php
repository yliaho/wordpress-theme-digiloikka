<?php
/**
 * Template Name: Ad agency
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['adagency.twig'];
$context['stadi_logo'] = get_field('stadi_logo', 'options');
Timber::render($templates, $context);