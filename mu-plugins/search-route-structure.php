<?php

//規章辦法頁面
function structureSearchResults($data)
{
   
    //找尋符合標題的page post
    $mainQuery = new WP_Query(array(
        'post_type' => 'structure',
        'posts_per_page' => -1, 
        'p' => $data['postID']//搜尋特定
    ));

    //$mainQuery->the_post();
    //要求回傳單一筆
    if($data['postID']){
        if($mainQuery->have_posts()) {
           $mainQuery->the_post();
           $class = Structure_ReturnCollection();
        }
        return $class;
    }
    //回傳全部
    else{
        $results=[];
        while($mainQuery->have_posts()) {
            $mainQuery->the_post();
    
            $singleresults = Structure_ReturnCollection();
            array_push($results,$singleresults);

        }
        
    return $results;
    }
    
}

    //統整輸出格式
    function Structure_ReturnCollection(){
    $collection = array(
       'id' => get_the_ID(),
       'title' => get_the_title(),
       'structureYear' => get_field('structureYear'),
       'structureCategory' => get_field('structureCategory'),
       'structureUrl' => get_field('structureUrl'),
       
    );
    return $collection;
    }



