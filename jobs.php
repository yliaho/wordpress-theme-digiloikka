<?php
/**
 * Template name: Jobs
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['jobs.twig'];
$context['stadi_logo'] = get_field('stadi_logo', 'options');
$context['gdpr_popup'] = get_field('gdpr_popup', 'options');
$context['gdpr_popup_en'] = get_field('gdpr_popup_en', 'options');
$context['gdpr_popup_sv'] = get_field('gdpr_popup_sv', 'options');
Timber::render($templates, $context);