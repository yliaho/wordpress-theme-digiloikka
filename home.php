<?php
/**
 * Template name: Homepage
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$templates = ['home.twig'];
Timber::render($templates, $context);


$images = get_field('partner_logo');
$size = 'thumbnail'; // (thumbnail, medium, large, full or custom size)

if( $images ): ?>

    <ul class="part-block">
        <?php foreach( $images as $image ): ?>
            <li>
            	<?php echo wp_get_attachment_image( $image['ID'], $size ); ?>
            </li>
        <?php endforeach; ?>
    </ul>

<?php endif; ?> 