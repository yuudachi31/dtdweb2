<?php

    require ('search-route-post.php');
    require ('search-route-banner.php');
    require ('search-route-staff.php');
    require ('search-route-graduateProjects.php');
    
    function dtd_custom_route() {
        register_rest_route('dtd/v1', 'banner', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'bannerSearchResults'
        ));
        register_rest_route('dtd/v1', 'post', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'postSearchResults'
        ));
        register_rest_route('dtd/v1', 'post/homePage', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'postHomePageSearchResults'
        ));
        register_rest_route('dtd/v1', 'post/honorPage', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'postHonorPageSearchResults'
        ));
        register_rest_route('dtd/v1', 'post/announcementPage', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'postAnnouncementPageSearchResults'
        ));
        register_rest_route('dtd/v1', 'staff', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'staffSearchResults'
        ));
        register_rest_route('dtd/v1', 'graduateProject', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'graduateProjectSearchResults'
        ));
    }

    add_action('rest_api_init', 'dtd_custom_route');

