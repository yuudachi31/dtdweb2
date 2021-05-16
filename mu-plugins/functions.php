<?php

    require ('search-route.php');
    
    function dtd_custom_route() {
        register_rest_route('dtd/v1', 'banner', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'bannerSearchResults'
        ));
        register_rest_route('dtd/v1', 'staff', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'staffSearchResults'
        ));
        register_rest_route('dtd/v1', 'post', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'postSearchResults'
        ));
        register_rest_route('dtd/v1', 'graduateProject', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'graduateProjectSearchResults'
        ));
    }

    add_action('rest_api_init', 'dtd_custom_route');

