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

         $content = wp_remote_get($url)["body"];
         $content = ConvertContentLabel($content);

         $results = array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'isLatest' => IsWithinSevenDays(),
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
               'isLatest' => IsWithinSevenDays(),
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
            'groupId' => 0,
            'title' => '系務公告 / Announcement',
            'list' => array()
         ),
         array(
            'groupId' => 1,
            'title' => '師生榮譽榜 / Achievement',
            'list' => array()
         ),
      );

      //將系務公告的post放入result
      $mainQuery = new WP_Query(array(
         'post_type' => 'post',
         'category_name' => 'announcement',
         //'ignore_sticky_posts' => true,   //設定至頂無效
         'posts_per_page' => $postPerGroup,
      ));

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results[0]['list'], array(
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
         //'ignore_sticky_posts' => true,   //設定至頂無效
         'posts_per_page' => $postPerGroup,
      ));

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results[1]['list'], array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'date' => get_the_date('Y/m/d'),
            'isLatest' => IsWithinSevenDays(),
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
         'ignore_sticky_posts' => true,   //設定至頂無效
         'posts_per_page' => $postPerPage,
         'paged' => $page
      ));

      $results = array();

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results, array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'isLatest' => IsWithinSevenDays(),
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
         'ignore_sticky_posts' => true,   //設定至頂無效
         'posts_per_page' => $postPerPage,
         'paged' => $page
      ));

      $results = array();

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results, array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'isLatest' => IsWithinSevenDays(),
            'content' => ConvertContentLabel(get_the_content()),
         ));
      }

      //array_push($results, pageID)

      return $results;
   }

   function ConvertContentLabel($content){
      $content = str_replace(array("\r"), '', $content); //將 \r 符號刪除
      $content = str_replace('\"', "\\\"", $content); //將 " 替換為 \"
      return $content;
   }

   function IsWithinSevenDays(){
      $postDate = strtotime(get_the_date('Y/m/d'));   //轉換為Unix 時間戳
      $today = strtotime(date("Y/m/d"));   //取得今日Unix 時間戳
      $isWithinSevenDays = (($today - $postDate) / 3600 / 24) <= 7;
      return $isWithinSevenDays;
   }