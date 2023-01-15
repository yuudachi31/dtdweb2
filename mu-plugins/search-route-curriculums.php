<?php

//規章辦法頁面
function curriculumsSearchResults($data)
{
   
    //找尋符合標題的page post
    $mainQuery = new WP_Query(array(
        'post_type' => 'curriculums',
        'posts_per_page' => -1, 
        'p' => $data['postID']//搜尋特定
    ));

    //$mainQuery->the_post();
    //要求回傳單一筆
    if($data['postID']){
        if($mainQuery->have_posts()) {
           $mainQuery->the_post();
           $class = Curriculum_ReturnCollection();
        }
        return $class;
    }
    //回傳全部
    else{
        $results=[];
        while($mainQuery->have_posts()) {
            $mainQuery->the_post();
    
            $singleresults = Curriculum_ReturnCollection();
            array_push($results,$singleresults);

        }
        
    return $results;
    }
    
}

    //統整輸出格式
    function Curriculum_ReturnCollection(){
    $collection = array(
       'id' => get_the_ID(),
       'title' => get_the_title(),
       'curriculumYear' => get_field('curriculumYear'),
       'curriculumSememster' => get_field('curriculumSememster'),
       'curriculumCategory' => get_field('curriculumCategory'),
       'curriculumUrl' => get_field('curriculumUrl'),
       
    );
    return $collection;
    }



