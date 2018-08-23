<?php
/**
 * Template Name: Departments
 * Description: A Page Template with a darker design.
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['department.twig'];
Timber::render($templates, $context);