<?php
/**
 * Template name: Jobs
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['jobs.twig'];
Timber::render($templates, $context);