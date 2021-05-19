<?php

   function classProjectSearchResults($data) {
      
      $classGroup = ($data['classGroup']) ;

      $mainQuery = new WP_Query(array(
         'post_type' => 'class_projects',
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
      else if($classGroup != null){

         $results = array(
            'sortTitle' => $classGroup,
            'sortList' => array()
         );

         while($mainQuery->have_posts()) {
            $mainQuery->the_post();

            //取出所屬課程分類名
            $sortTitle = get_the_terms(get_the_ID(),'taxonomy_className')[0]->name;

            if($sortTitle == $classGroup){
               $collection = ReturnClassProjectCollection();

               array_push($results['sortList'], $collection);
            }
         }
         return $results;
      }
      //全部文章
      else{
         $taxonomy = get_terms([
            'taxonomy' => 'taxonomy_className',
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
   
            //取出所屬課程分類名
            $sortTitle = get_the_terms(get_the_ID(),'taxonomy_className')[0]->name;
   
            for($i = 0; $i < count($results); $i++){
               if($results[$i]['sortTitle'] == $sortTitle){
                  array_push($results[$i]['sortList'], $collection);
               }
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
            unset($collection['relatedLinks'][$i]);
         }
      }

      return $collection;
   }