<?php

function projectSearchResults($data) {
    $mainQuery = new WP_Query(array(
       'post_type' => 'project'
    ));

    $results = array(
       'projects' => array(),
    );

    while($mainQuery->have_posts()) {
       $mainQuery->the_post();

       array_push($results['projects'], array(
          'title' => get_the_title(),
          // 'content' => get_the_content(),
          'project_site_url' => get_field('project_site_url'),
          'permalink' => get_the_permalink()
       ));
    }

    return $results;
}

function prefix_register_dtd_routes_projects() {
    register_rest_route('dtd/v1', 'projects', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'projectSearchResults'
    ));
}

add_action( 'rest_api_init', 'prefix_register_dtd_routes_projects' );


?>