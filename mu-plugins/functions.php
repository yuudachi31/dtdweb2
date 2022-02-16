<?php

    require ('search-route-homePage.php');
    require ('search-route-post.php');
    require ('search-route-banner.php');
    require ('search-route-staff.php');
    require ('search-route-graduateProject.php');
    require ('search-route-classProject.php');
    require ('search-route-excellentProject.php');
    require ('search-route-page.php');
    require ('search-route-formDownload.php');
    
    function dtd_custom_route() {
        register_rest_route('dtd/v1', 'homePage', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'homeSearchResults'
        ));
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
        register_rest_route('dtd/v1', 'post/achievementsPage', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'postAchievementsPageSearchResults'
        ));
        register_rest_route('dtd/v1', 'post/announcementsPage', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'postAnnouncementsPageSearchResults'
        ));
        register_rest_route('dtd/v1', 'staff', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'staffSearchResults'
        ));
        register_rest_route('dtd/v1', 'graduateProject', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'graduateProjectSearchResults'
        ));
        register_rest_route('dtd/v1', 'classProject', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'classProjectSearchResults'
        ));
        register_rest_route('dtd/v1', 'excellentProject', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'excellentProjectSearchResults'
        ));
        register_rest_route('dtd/v1', 'page', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'pageRegulationsSearchResults'
        ));
        register_rest_route('dtd/v1', 'formDownload', array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'formDownloadSearchResults'
        ));
    }

    function wprc_add_acf_posts_endpoint( $allowed_endpoints ) {
        if ( ! isset( $allowed_endpoints[ 'dtd/v1' ] ) || 
             ! in_array( 'page', $allowed_endpoints[ 'dtd/v1' ] ) ) {
            $allowed_endpoints[ 'dtd/v1' ][] = 'page';
        }
        if ( ! isset( $allowed_endpoints[ 'dtd/v1' ] ) || 
             ! in_array( 'formDownload', $allowed_endpoints[ 'dtd/v1' ] ) ) {
            $allowed_endpoints[ 'dtd/v1' ][] = 'formDownload';
        }
        if ( ! isset( $allowed_endpoints[ 'dtd/v1' ] ) || 
             ! in_array( 'post/announcementsPage', $allowed_endpoints[ 'dtd/v1' ] ) ) {
            $allowed_endpoints[ 'dtd/v1' ][] = 'post/announcementsPage';
        }
        if ( ! isset( $allowed_endpoints[ 'dtd/v1' ] ) || 
             ! in_array( 'post', $allowed_endpoints[ 'dtd/v1' ] ) ) {
            $allowed_endpoints[ 'dtd/v1' ][] = 'post';
        }
        return $allowed_endpoints;
    }
    add_filter( 'wp_rest_cache/allowed_endpoints', 'wprc_add_acf_posts_endpoint', 10, 1);

    add_action('rest_api_init', 'dtd_custom_route');

