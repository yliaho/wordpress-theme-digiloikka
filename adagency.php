<?php
/**
 * Template Name: Ad agency
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['adagency.twig'];
Timber::render($templates, $context);