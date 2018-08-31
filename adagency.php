<?php
/**
 * Template Name: Ad agency
 * Description: A Page Template with a darker design.
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['adagency.twig'];
Timber::render($templates, $context);