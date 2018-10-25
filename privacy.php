<?php
/**
 * Template Name: Privacy
 
 */



$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['stadi_logo'] = get_field('stadi_logo', 'options');
$context['gdpr_popup'] = get_field('gdpr_popup', 'options');
$templates = ['privacy-policy.twig'];
Timber::render($templates, $context);