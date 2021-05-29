<?php

   function cooperateProjectSearchResults($data) {
      
      $mainQuery = new WP_Query(array(
         'post_type' => 'cooperation_projects',
         'posts_per_page' => -1, //ALL
         'p' => $data['postID'],  //用PostID搜尋特定文章
      ));

      //如果沒有要求特定文章，就回傳全部文章或是單獨某個學年組的文章
      if($data['postID'] == null){

         $results = array();
         
         while($mainQuery->have_posts()) {
            $mainQuery->the_post();

            $collection = ReturnCooperateProjectCollection();
            
            array_push($results, $collection);
         }
      }
      //要求回傳單一筆文章
      else{
         while($mainQuery->have_posts()) {

            $mainQuery->the_post();

            $results = ReturnCooperateProjectCollection();
         }
      }
      
      return $results;
   }

   //統整作品輸出格式
   function ReturnCooperateProjectCollection(){

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
      //消除該筆資料relatedLinks中空白的項目
      for($i = count($collection['relatedLinks']) - 1; $i >= 0; $i--){
         if($collection['relatedLinks'][$i]['linkUrl'] == ''){
            unset($collection['relatedLinks'][$i]);
         }
      }
      return $collection;
   }