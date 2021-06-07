<?php

   function classProjectSearchResults($data) {
      
      $workType = ($data['workType']) ;

      $mainQuery = new WP_Query(array(
         'post_type' => 'class_projects',
         'posts_per_page' => -1, //ALL
         'p' => $data['postID'],  //用PostID搜尋特定文章
      ));
      
      //如果要求特定文章
      if($data['postID'] != null){
         while($mainQuery->have_posts()) {
            $mainQuery->the_post();
            $collection = ReturnClassProjectCollection();
         }
         return $collection;
      }
      //如果要求特定課程
      else if($workType != null){

         $results = array();
         array_push($results,array(
            'sortTitle' => $workType,
            'sortList' => array()
         ));

         while($mainQuery->have_posts()) {
            $mainQuery->the_post();

            if(ClassProject_IsPostHasTheTaxonomy($workType)){
               $collection = ReturnClassProjectCollection();

               $results[0]['sortList'] = RandomInsertClassProjectCollection($results[0]['sortList'], $collection);
            }
         }
         return $results;
      }
      //全部文章
      else{
         //取得全部的課程分類
         $taxonomy = get_terms([
            'taxonomy' => 'taxonomy_workType',
            'hide_empty' => false,
         ]);
   
         $results = array();
   
         for($i = 0; $i < count($taxonomy); $i++){
           array_push($results, array(
            'sortId' => $taxonomy[$i]->term_id,
            'sortTitle' => $taxonomy[$i]->name,
            'sortList' => array()
           ));
         }
   
         while($mainQuery->have_posts()) {
            $mainQuery->the_post();
   
            $collection = ReturnClassProjectCollection();
   
            for($i = 0; $i < count($results); $i++){
               if(ClassProject_IsPostHasTheTaxonomy($results[$i]['sortTitle'])){
                  $results[$i]['sortList'] = RandomInsertClassProjectCollection($results[$i]['sortList'], $collection);
               }
            }
         }
         
         //消除沒有作品的課程項目
         for($i = count($results) - 1; $i >= 0; $i--){
            if(count($results[$i]['sortList']) == 0){
               array_splice($results, $i, 1);
            }
         }

         return $results;
      }
   }

   //統整作品輸出格式
   function ReturnClassProjectCollection(){
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
            array_splice($collection['relatedLinks'], $i, 1);
         }
      }

      return $collection;
   }

   //無法直接插入在某index資料會出問題，因此使用此函式
   function RandomInsertClassProjectCollection($array, $collection){
      
      //先插在最後一項
      array_push($array, $collection);

      $lastIndex = count($array) - 1;

      //再取隨機一項進行交換
      $randomIndex = rand(0, count($array) - 1);
      if($randomIndex != $lastIndex){
         
         $storage = array();

         $storage = $array[$randomIndex];
         $array[$randomIndex] = $array[$lastIndex];
         $array[$lastIndex] = $storage;
      }

      return $array;
   }

   function ClassProject_IsPostHasTheTaxonomy($findTaxonomy){
      $isExist = false;

      //取出此Post擁有的分類
      $taxonomyArray = get_the_terms(get_the_ID(),'taxonomy_workType');

      foreach($taxonomyArray as $eachTaxonomy){
         if($eachTaxonomy->name == $findTaxonomy) $isExist = true;
      }

      return $isExist;
   }