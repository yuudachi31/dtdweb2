<?php

function prefix_register_dtd_routes_projects() {

   register_post_type('banners', array(
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'banners'),
      'has_archive' => true,
      'supports' => array('title', 'thumbnail'),  #發文資料欄位
      'public' => true,
      'labels' => array(
            'name' => '首頁輪播圖',
            'add_new_item' => '新增',
            'edit_item' => '編輯',
            'all_items' => '全部',
            'singular_name' => 'Banners'
      ),
      'menu_icon' => 'dashicons-images-alt2'
   ));

   register_post_type('staff', array(
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'staff'),
      'has_archive' => true,
      'supports' => array('title', 'thumbnail'),  #發文資料欄位
      'public' => true,
      'labels' => array(
            'name' => '教職員',
            'add_new_item' => '新增',
            'edit_item' => '編輯',
            'all_items' => '全部',
            'singular_name' => 'Staff'
      ),
      'menu_icon' => 'dashicons-admin-users'
   ));

   register_post_type('graduateProjects', array(
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'graduateProjects'),
      'has_archive' => true,
      'supports' => array('title', 'thumbnail'),
      'public' => true,
      'labels' => array(
            'name' => '畢業專題',
            'add_new_item' => '新增',
            'edit_item' => '編輯',
            'all_items' => '全部',
            'singular_name' => 'GraduateProjects'
      ),
      'menu_icon' => 'dashicons-welcome-learn-more'
   ));   
}

add_action('init', 'prefix_register_dtd_routes_projects');
