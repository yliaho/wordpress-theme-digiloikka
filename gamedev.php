<?php
/**
 * Template Name: Game Dev
 * Description: A Page Template with a darker design.
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['gamedev.twig'];
Timber::render($templates, $context);