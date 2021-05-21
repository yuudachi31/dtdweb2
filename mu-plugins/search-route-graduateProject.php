<?php

   function graduateProjectSearchResults($data) {
      
      $mainQuery = new WP_Query(array(
         'post_type' => 'graduate_projects',
         'p' => $data['postID'],  //用PostID搜尋特定文章
         'meta_value' => $data['graduateYear'], //當request帶有graduateYear=XXX，只顯示XXX學年組的文章
      ));

      //如果沒有要求特定文章，就回傳全部文章或是單獨某個學年組的文章
      if($data['postID'] == null){

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

            $collection = ReturnGraduateProjectCollection();

            array_push($results[$gradRange[1] - $sortTitle]['sortList'], $collection);
         }
         //刪除空白沒有資料的年份
         for($i = $gradRange[1] - $gradRange[0]; $i >= 0; $i--){
            if(count($results[$i]['sortList']) == 0){
               unset($results[$i]);
               $results = array_values($results);
            }
         }
      }
      //要求回傳單一筆文章
      else{
         while($mainQuery->have_posts()) {

            $mainQuery->the_post();

            $results = ReturnGraduateProjectCollection();
         }
      }
      
      return $results;
   }

   //統整作品輸出格式
   function ReturnGraduateProjectCollection(){
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