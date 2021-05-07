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


   function staffSearchResults($data) {
      $mainQuery = new WP_Query(array(
         'post_type' => 'staff',
         's' => sanitize_text_field($data['term'])
      ));

      //取得全體資料
      if($mainQuery->post_count > 1){
         
         $results = array(
            array(
               'groupid' => 0,
               'title' => "專任教師/互動科技領域",
               'list' => array(),
            ),
            array(
               'groupid' => 1,
               'title' => "專任教師/遊戲設計領域",
               'list' => array(),
            ),
            array(
               'groupid' => 2,
               'title' => "專任教師/創意設計領域",
               'list' => array(),
            ),
            array(
               'groupid' => 3,
               'title' => "兼任老師",
               'list' => array(),
            ),
            array(
               'groupid' => 4,
               'title' => "行政人員",
               'list' => array(),
            ),
         );
   
         while($mainQuery->have_posts()) {
            $mainQuery->the_post();
   
            $groupID = 0;
            switch(get_field('grouptitle')){
               case "專任老師/互動科技領域":
                  $groupID = 0; break;
               case "專任老師/遊戲設計領域":
                  $groupID = 1; break;
               case "專任老師/創意設計領域":
                  $groupID = 2; break;
               case "兼任老師":
                  $groupID = 3; break;
               case "行政人員":
                  $groupID = 4; break;
            }
   
            array_push($results[$groupID]['list'], array(
               'id' => get_the_ID(),
               'teachername' => get_field('teachername'),
               'englishname' => get_field('englishname'),
               'title' => get_field('title'),
               'phone' => get_field('phone'),
               'room' => get_field('room'),
               'website' => get_field('website'),
               'education' => get_field('education'),
               'website' => get_field('website'),
               'skill' => get_field('skill'),
               'email' => get_field('email'),
               'imgurl' => get_field('imgurl')['url'],
            ));
         }
   
         return $results;
      }
      //單獨一筆老師資料
      else{
         $mainQuery->the_post();
         $results = array(
            'id' => get_the_ID(),
            'grouptitle' => get_field('grouptitle'),
            'teachername' => get_field('teachername'),
            'englishname' => get_field('englishname'),
            'title' => get_field('title'),
            'phone' => get_field('phone'),
            'room' => get_field('room'),
            'website' => get_field('website'),
            'education' => get_field('education'),
            'website' => get_field('website'),
            'skill' => get_field('skill'),
            'email' => get_field('email'),
            'imgurl' => get_field('imgurl')['url'],);
         return $results;
      }
   }

   function postSearchResults($data) {
      $mainQuery = new WP_Query(array(
         'post_type' => 'post',
         's' => sanitize_text_field($data['term'])
      ));

      $results = array(
         'posts' => array(),
      );

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         array_push($results['posts'], array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'content' => get_the_content(),
            'permalink' => get_the_permalink()
         ));
      }

      return $results;
   }
