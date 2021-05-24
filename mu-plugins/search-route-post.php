<?php

   function postSearchResults($data) {

      $results = array();

      $mainQuery = new WP_Query(array(
         'post_type' => 'post',
         'p' => $data['postID']
      ));

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results, array(
            'id' => get_the_ID(),
            'groupTitle' => get_field('groupTitle'),
            'title' => get_the_title(),
            'content' => get_the_content(),
         ));
      }

      return $results;
   }


   function postHomePageSearchResults($data) {

      $postPerGroup = ( $data['postPerGroup'] ) ? $data['postPerGroup'] : 5;

      $results = array(
         array(
            'groupid' => 0,
            'title' => '系務公告 / Announcement',
            'list' => array()
         ),
         array(
            'groupid' => 1,
            'title' => '師生榮譽榜 / Achievement',
            'list' => array()
         ),
      );

      $mainQuery = new WP_Query(array(
         'post_type' => 'post',
         'category_name' => 'announcement',
         'ignore_sticky_posts' => true,
         'posts_per_page' => $postPerGroup,
      ));

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results[0]['list'], array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'date' => get_the_date('Y/m/d'),
         ));
      }

      $mainQuery = new WP_Query(array(
         'post_type' => 'post',
         'category_name' => 'achievement',
         'ignore_sticky_posts' => true,
         'posts_per_page' => $postPerGroup,
      ));

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results[1]['list'], array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'date' => get_the_date('Y/m/d'),
         ));
      }

      return $results;
   }

   function postAchievementsPageSearchResults($data) {
      $page = ( $data['page'] ) ? $data['page'] : 1;
      $postPerPage = ( $data['postPerPage'] ) ? $data['postPerPage'] : 20;

      $mainQuery = new WP_Query(array(
         'post_type' => 'post',
         'category_name' => 'achievement',
         'ignore_sticky_posts' => true,
         'posts_per_page' => $postPerPage,
         'paged' => $page
      ));

      $results = array();

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results, array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'content' => apply_filters('the_content', get_the_content()),
            //'content' => get_the_content(),
         ));
      }

      return $results;
   }

   function postAnnouncementsPageSearchResults($data) {
      $page = ( $data['page'] ) ? $data['page'] : 1;
      $postPerPage = ( $data['postPerPage'] ) ? $data['postPerPage'] : 20;

      $mainQuery = new WP_Query(array(
         'post_type' => 'post',
         'category_name' => 'announcement',
         'ignore_sticky_posts' => true,
         'posts_per_page' => $postPerPage,
         'paged' => $page
      ));

      $results = array();

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results, array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'content' => get_the_content(),
         ));
      }

      //array_push($results, pageID)

      return $results;
   }
