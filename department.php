<?php
/**
 * Template Name: Departments
 
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['stadi_logo'] = get_field('stadi_logo', 'options');
$templates = ['department.twig'];
Timber::render($templates, $context);