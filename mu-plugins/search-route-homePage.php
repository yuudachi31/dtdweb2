<?php

    //首頁資訊，Banner、最新系務公告五筆、師生榮譽榜五筆
   function homeSearchResults($data) {

    //引數 (default = 5))
    $postPerGroup = ( $data['postPerGroup'] ) ? $data['postPerGroup'] : 5;

    $results = array(
       'banner' => array(),
       'announcement' => array(
          'groupId' => 0,
          'title' => '系務公告 / Announcement',
          'list' => array()
       ),
       'achievement' => array(
          'groupId' => 1,
          'title' => '師生榮譽榜 / Achievement',
          'list' => array()
       )
    );

    //取得banner
    $mainQuery = new WP_Query(array(
        'post_type' => 'banners',
        'posts_per_page' => -1, //ALL
    ));

    while($mainQuery->have_posts()) {
        $mainQuery->the_post();

        array_push($results['banner'], array(
            'id' => get_the_ID(),
            'bannerUrl' => get_field('bannerUrl')['url'],
            'link' => get_field('link'),
        ));
    }

    //將系務公告的post放入result
    $mainQuery = new WP_Query(array(
       'post_type' => 'post',
       'category_name' => 'announcement',
       'ignore_sticky_posts' => true,   //設定至頂無效
       'posts_per_page' => $postPerGroup,
    ));

    while($mainQuery->have_posts()) {
       $mainQuery->the_post();

       array_push($results['announcement']['list'], array(
          'id' => get_the_ID(),
          'title' => get_the_title(),
          'date' => get_the_date('Y/m/d'),
          'isLatest' => IsWithinSevenDays(),
       ));
    }

    //將師生榮譽的post放入result
    $mainQuery = new WP_Query(array(
       'post_type' => 'post',
       'category_name' => 'achievement',
       'ignore_sticky_posts' => true,   //設定至頂無效
       'posts_per_page' => $postPerGroup,
    ));

    while($mainQuery->have_posts()) {
       $mainQuery->the_post();

       array_push($results['achievement']['list'], array(
          'id' => get_the_ID(),
          'title' => get_the_title(),
          'date' => get_the_date('Y/m/d'),
          'isLatest' => IsWithinSevenDays(),
       ));
    }

    return $results;
 }
   