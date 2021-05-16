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

   function graduateProjectSearchResults($data) {
      
      $mainQuery = new WP_Query(array(
         'post_type' => 'graduateProjects',
         's' => sanitize_text_field($data['term'])
      ));
      
      $gradRange = [100, 150];

      $results = array();
      for($i = $gradRange[1]; $i >= $gradRange[0]; $i--){
         array_push($results,array(
            'sortTitle' => $i,
            'sortList' => array()
         ));
      }

      while($mainQuery->have_posts()) {
         $mainQuery->the_post();

         $sortTitle = get_field('sortTitle');

         $collection = array(
            'id' => get_the_ID(),
            'workTitle' => get_field('workTitle'),
            'workImgUrl' => get_field('workImgUrl')['url'],
            'introduction' => get_field('introduction'),
            'author' => get_field('author'),
            'instructor' => get_field('instructor'),
            'honor' => get_field('honor'),
            'relatedLinks' => array(
               array(
                  'linkTitle' => get_field('relatedLinks')['link1']['linkTitle'],
                  'linkUrl' => get_field('relatedLinks')['link1']['linkUrl'],
               ),  
               array(
                  'linkTitle' => get_field('relatedLinks')['link2']['linkTitle'],
                  'linkUrl' => get_field('relatedLinks')['link2']['linkUrl'],
               ),  
               array(
                  'linkTitle' => get_field('relatedLinks')['link3']['linkTitle'],
                  'linkUrl' => get_field('relatedLinks')['link3']['linkUrl'],
               ),  
               array(
                  'linkTitle' => get_field('relatedLinks')['link4']['linkTitle'],
                  'linkUrl' => get_field('relatedLinks')['link4']['linkUrl'],
               ),  
            )
         );

         for($i = count($collection['relatedLinks']) - 1; $i >= 0; $i--){
            if($collection['relatedLinks'][$i]['linkUrl'] == ''){
               unset($collection['relatedLinks'][$i]);
            }
         }

         array_push($results[$gradRange[1] - $sortTitle]['sortList'], $collection);
      }

      for($i = $gradRange[1] - $gradRange[0]; $i >= 0; $i--){
         if(count($results[$i]['sortList']) == 0){
            unset($results[$i]);
            $results = array_values($results);
         }
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
               case "互動科技領域":
                  $groupID = 0; break;
               case "遊戲設計領域":
                  $groupID = 1; break;
               case "創意設計領域":
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
