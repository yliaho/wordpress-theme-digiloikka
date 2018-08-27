<?php
/**
 * Template Name: Soft Dev
 * Description: A Page Template with a darker design.
 */


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['softdev.twig'];
Timber::render($templates, $context);