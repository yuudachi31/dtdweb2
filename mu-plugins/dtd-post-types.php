<?php

function dtd_post_types() {
   register_post_type('staff', array(
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'staff'),
      'has_archive' => true,
      'supports' => array('title', 'editor', 'thumbnail'),
      'public' => true,
      'labels' => array(
            'name' => 'Staff',
            'add_new_item' => 'Add New Staff',
            'edit_item' => 'Edit Staff',
            'all_items' => 'All Staff',
            'singular_name' => 'Staff'
      ),
      'menu_icon' => 'dashicons-admin-users'
   ));

   register_post_type('project', array(
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'projects'),
      'has_archive' => true,
      'supports' => array('title', 'thumbnail'),
      'public' => true,
      'labels' => array(
            'name' => 'Projects',
            'add_new_item' => 'Add New Project',
            'edit_item' => 'Edit Project',
            'all_items' => 'All Project',
            'singular_name' => 'Project'
      ),
      'menu_icon' => 'dashicons-admin-customizer'
   ));   
}

add_action('init', 'dtd_post_types');