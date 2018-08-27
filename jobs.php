<?php
/**
 * Template Name: Työpaikat
 * Description: A Page Template with a darker design.
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['jobs.twig'];
Timber::render($templates, $context);