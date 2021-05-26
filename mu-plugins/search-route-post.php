<?php

   function postSearchResults($data) {

      $results = array();

      $mainQuery = new WP_Query(array(
         'post_type' => 'post',
         'p' => $data['postID']
      ));

      if($data['postID']){

         while($mainQuery->have_posts()) {
            $mainQuery->the_post();
            $url = get_permalink(get_the_ID());
         }

         $content = wp_remote_get( $url)["body"];
         $content = ConvertContentLabel($content);
         //$content = CaptureMainContent($content);

         $results = array(
            'id' => get_the_ID(),
            'groupTitle' => get_field('groupTitle'),
            'title' => get_the_title(),
            'content' => $content,
         );

         return $results;
      }
      else{
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
            'content' => ConvertContentLabel(get_the_content()),
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
            'content' => ConvertContentLabel(get_the_content()),
         ));
      }

      //array_push($results, pageID)

      return $results;
   }

   function ConvertContentLabel($content){
      $content = str_replace(array("\r"), '', $content);
      $content = str_replace('\"', "\\\"", $content);
      return $content;
   }

   function CaptureMainContent($content){
      $capture_start = "<h2>";
      $capture_end = "<h2>";
      $start = stripos($content, $capture_start);
      $end = strrpos($content, $capture_end);
      $content = substr($content, $start, $end-1);
      return $content;
   }
