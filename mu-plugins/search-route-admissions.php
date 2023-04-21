<?php

//規章辦法頁面
function admissionsSearchResults($data)
{
   
    //找尋符合標題的page post
    $mainQuery = new WP_Query(array(
        'post_type' => 'admissions',
        'posts_per_page' => -1, 
        'p' => $data['postID']//搜尋特定
    ));

    //$mainQuery->the_post();
    //要求回傳單一筆
   //  if($data['postID']){
   //      if($mainQuery->have_posts()) {
   //         $mainQuery->the_post();
   //         $class = Admissions_ReturnCollection();
   //      }
   //      return $class;
   //  }
    //回傳全部
   //  else{
        $results=[];
        while($mainQuery->have_posts()) {
            $mainQuery->the_post();
    
            $singleresults = Admissions_ReturnCollection();
            array_push($results,$singleresults);

        }
        
    return $results;
   //  }
    
}

    //統整輸出格式
    function Admissions_ReturnCollection(){
    $collection = array(
       'id' => get_the_ID(),
       'title' => get_the_title(),
       'all' => array(
        array(
        'degreeImg' => get_field('admission')['university']['degreeImg'],
        'degreeName' => get_field('admission')['university']['degreeName'],
          'info' => array(
             array(
                'info_title' => get_field('admission')['university']['info']['info_1']['info_title'],
                'info_content' => get_field('admission')['university']['info']['info_1']['info_content']
             ),
             array(
               'info_title' => get_field('admission')['university']['info']['info_2']['info_title'],
               'info_content' => get_field('admission')['university']['info']['info_2']['info_content']
            ),
            array(
               'info_title' => get_field('admission')['university']['info']['info_3']['info_title'],
               'info_content' => get_field('admission')['university']['info']['info_3']['info_content']
            ), 
            array(
               'info_title' => get_field('admission')['university']['info']['info_4']['info_title'],
               'info_content' => get_field('admission')['university']['info']['info_4']['info_content'],
               'info_URL' =>get_field('admission')['university']['info']['info_4']['info_URL']
            ),  
            array(
               'info_title' => get_field('admission')['university']['info']['info_5']['info_title'],
               'info_content' => get_field('admission')['university']['info']['info_5']['info_content'],
               'info_URL' =>get_field('admission')['university']['info']['info_5']['info_URL']
            ), 
            array(
               'info_title' => get_field('admission')['university']['info']['info_6']['info_title'],
               'info_content' => get_field('admission')['university']['info']['info_6']['info_content'],
               'info_URL' =>get_field('admission')['university']['info']['info_6']['info_URL']
            ),
            array(
               'info_title' => get_field('admission')['university']['info']['info_7']['info_title'],
               'info_content' => get_field('admission')['university']['info']['info_7']['info_content'],
               'info_URL' =>get_field('admission')['university']['info']['info_7']['info_URL']
            ),   
            array(
               'info_title' => get_field('admission')['university']['info']['info_8']['info_title'],
               'info_content' => get_field('admission')['university']['info']['info_8']['info_content']
            ),   
             ),
             'regulations_rules'=> array(
               'rule_title' => get_field('admission')['university']['regulations']['regulations_rules']['rule_title'],
                  'rule_content' => get_field('admission')['university']['regulations']['regulations_rules']['rule_content']
             ),
             'regulations_documents' => array(
               'document_title' => get_field('admission')['university']['regulations']['regulations_documents']['document_title'],
               'document_name' => get_field('admission')['university']['regulations']['regulations_documents']['document_name'],
               'document_URL' => get_field('admission')['university']['regulations']['regulations_documents']['document_URL'],
             )
             ),
             array(
               'degreeImg' => get_field('admission')['master']['degreeImg'],
               'degreeName' => get_field('admission')['master']['degreeName'],
                 'info' => array(
                    array(
                       'info_title' => get_field('admission')['master']['info']['info_1']['info_title'],
                       'info_content' => get_field('admission')['master']['info']['info_1']['info_content']
                    ),
                    array(
                      'info_title' => get_field('admission')['master']['info']['info_2']['info_title'],
                      'info_content' => get_field('admission')['master']['info']['info_2']['info_content']
                   ),
                   array(
                     'info_title' => get_field('admission')['master']['info']['info_5']['info_title'],
                     'info_content' => get_field('admission')['master']['info']['info_5']['info_content'],
                  ), 
                   array(
                      'info_title' => get_field('admission')['master']['info']['info_3']['info_title'],
                      'info_content' => get_field('admission')['master']['info']['info_3']['info_content']
                   ), 
                   array(
                      'info_title' => get_field('admission')['master']['info']['info_4']['info_title'],
                      'info_content' => get_field('admission')['master']['info']['info_4']['info_content'],
                      'info_URL' =>get_field('admission')['master']['info']['info_4']['info_URL']
                   ),  
                   
                   array(
                      'info_title' => get_field('admission')['master']['info']['info_6']['info_title'],
                      'info_content' => get_field('admission')['master']['info']['info_6']['info_content'],
                      'info_URL' =>get_field('admission')['master']['info']['info_6']['info_URL']
                   ) 
                    ),
                    'regulations_rules'=> array(
                      'rule_title' => get_field('admission')['master']['regulations']['regulations_rules']['rule_title'],
                         'rule_content' => get_field('admission')['master']['regulations']['regulations_rules']['rule_content']
                    ),
                    'regulations_documents' => array(
                      'document_title' => get_field('admission')['master']['regulations']['regulations_documents']['document_title'],
                      'document_name' => get_field('admission')['master']['regulations']['regulations_documents']['document_name'],
                      'document_URL' => get_field('admission')['master']['regulations']['regulations_documents']['document_URL'],
                    )
                    ),
                    array(
                     'degreeImg' => get_field('admission')['university']['degreeImg'],
                     'degreeName' => get_field('admission')['university']['degreeName'],
                       'info' => array(
                        array(
                           'info_title' => get_field('admission')['master']['info']['info_1']['info_title'],
                           'info_content' => get_field('admission')['master']['info']['info_1']['info_content']
                        ),
                        array(
                          'info_title' => get_field('admission')['master']['info']['info_2']['info_title'],
                          'info_content' => get_field('admission')['master']['info']['info_2']['info_content']
                       ),
                       array(
                         'info_title' => get_field('admission')['master']['info']['info_5']['info_title'],
                         'info_content' => get_field('admission')['master']['info']['info_5']['info_content'],
                      ), 
                       array(
                          'info_title' => get_field('admission')['master']['info']['info_3']['info_title'],
                          'info_content' => get_field('admission')['master']['info']['info_3']['info_content']
                       ), 
                       array(
                          'info_title' => get_field('admission')['master']['info']['info_4']['info_title'],
                          'info_content' => get_field('admission')['master']['info']['info_4']['info_content'],
                          'info_URL' =>get_field('admission')['master']['info']['info_4']['info_URL']
                       ),  
                       
                       array(
                          'info_title' => get_field('admission')['master']['info']['info_6']['info_title'],
                          'info_content' => get_field('admission')['master']['info']['info_6']['info_content'],
                          'info_URL' =>get_field('admission')['master']['info']['info_6']['info_URL']
                       ) 
                          ),
                          'regulations_rules'=> array(
                            'rule_title' => get_field('admission')['university']['regulations']['regulations_rules']['rule_title'],
                               'rule_content' => get_field('admission')['university']['regulations']['regulations_rules']['rule_content']
                          ),
                          'regulations_documents' => array(
                            'document_title' => get_field('admission')['university']['regulations']['regulations_documents']['document_title'],
                            'document_name' => get_field('admission')['university']['regulations']['regulations_documents']['document_name'],
                            'document_URL' => get_field('admission')['university']['regulations']['regulations_documents']['document_URL'],
                          )
                          ),

       )
       
    );

     //消除該筆資料中空白的項目 
   //   for($i = count($collection['all']['info']['']) - 1; $i >= 0; $i--){
   //    if($collection['relatedLinks'][$i]['linkUrl'] == ''){
   //       array_splice($collection['relatedLinks'], $i, 1);
   //    }
   // }
    return $collection;
    }



