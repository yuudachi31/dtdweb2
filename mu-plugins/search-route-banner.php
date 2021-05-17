<?php

    function bannerSearchResults($data) {
        $mainQuery = new WP_Query(array(
            'post_type' => 'banners'
        ));

        $results = array();

        while($mainQuery->have_posts()) {
            $mainQuery->the_post();

            array_push($results, array(
                'id' => get_the_ID(),
                'bannerUrl' => get_field('bannerUrl')['url'],
            ));
        }

        return $results;
    }