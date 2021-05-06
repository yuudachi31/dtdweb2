<?php

    require ('search-route.php');
    
    function dtd_custom_route() {
        register_rest_route('dtd/v1', 'staff', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'staffSearchResults'
        ));
        register_rest_route('dtd/v1', 'post', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'postSearchResults'
        ));
        register_rest_route('dtd/v1', 'project', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'projectSearchResults'
        ));
    }

    add_action('rest_api_init', 'dtd_custom_route');
