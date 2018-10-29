<?php
/**
 * Template name: Homepage
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['stadi_logo'] = get_field('stadi_logo', 'options');
$context['gdpr_popup'] = get_field('gdpr_popup', 'options');
$context['gdpr_popup_en'] = get_field('gdpr_popup_en', 'options');
$context['gdpr_popup_sv'] = get_field('gdpr_popup_sv', 'options');

$templates = ['home.twig', 'footer.twig', 'department.twig'];
Timber::render( $templates, $context);


