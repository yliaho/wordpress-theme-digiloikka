<?php
/**
 * Template name: Contact info
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['contactinfo.twig'];
$context['stadi_logo'] = get_field('stadi_logo', 'options');
Timber::render($templates, $context);