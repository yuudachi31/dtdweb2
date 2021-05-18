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
            'add_new' => '新增',
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
            'add_new' => '新增',
            'edit_item' => '編輯',
            'all_items' => '全部',
            'singular_name' => 'Staff'
      ),
      'menu_icon' => 'dashicons-admin-users'
   ));

   register_post_type('graduate_projects', array(
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'graduate_projects'),
      'has_archive' => true,
      'supports' => array('title', 'thumbnail'),
      'public' => true,
      'labels' => array(
            'name' => '畢業專題',
            'add_new' => '新增專題',
            'edit_item' => '編輯專題',
            'all_items' => '全部專題',
            'singular_name' => 'graduate_projects'
      ),
      'menu_icon' => 'dashicons-welcome-learn-more'
   ));   

   register_post_type('class_projects', array(
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'class_projects'),
      'has_archive' => true,
      'supports' => array('title', 'thumbnail'),
      'public' => true,
      'labels' => array(
            'name' => '課程專題',
            'add_new' => '新增專題',
            'edit_item' => '編輯專題',
            'all_items' => '全部專題',
            'singular_name' => 'class_projects'
      ),
      'menu_icon' => 'dashicons-archive'
   ));     
}

add_action('init', 'prefix_register_dtd_routes_projects');



//建立post-type中的分類
function create_taxonomies() 
{
  register_taxonomy('taxonomy_className','class_projects', array(
    'hierarchical' => true,
    'labels' => array(
      'name' => '課程清單',
      'all_items' => '全部',
      'edit_item' => '編輯', 
    ),
    'show_in_rest' => true,
    'show_admin_column' => true,
    'show_ui' => true,
    'public' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'taxonomy_className' ),
  ));
}

add_action( 'init', 'create_taxonomies');


