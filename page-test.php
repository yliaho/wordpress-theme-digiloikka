<?php 


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['page-test.twig'];
Timber::render($templates, $context);