<?php
/**
 * Template Name: Departments
 
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['department.twig'];
Timber::render($templates, $context);