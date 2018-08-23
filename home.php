<?php
/**
 * Template name: Homepage
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['home.twig'];
Timber::render($templates, $context);



$images = get_field('partners');
$size = 'medium'; // (thumbnail, medium, large, full or custom size)

if( $images ): ?>
<div class="partners">
    <ul class="part-block">
        <?php foreach( $images as $image ): ?>
            <li>
            	<?php echo wp_get_attachment_image( $image['ID'], $size ); ?>
            </li>
        <?php endforeach; ?>
    </ul>
</div>

<?php endif; ?>