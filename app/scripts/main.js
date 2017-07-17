console.log('\'Allo \'Allo!');

$(function(){


    new WOW().init();
     $('.tooltip').tooltipster();
    
    $('.parallax-window').parallax({imageSrc: '../images/hom_e.png', position: '-1px'});
    $('.parallax-window-2').parallax({imageSrc: '../images/mid-banner.jpg', position: '-1px'});
    $('.parallax-window-3').parallax({imageSrc: '../images/testimonials.jpg', position: '-1px'});
    
    new Typist(document.querySelector('#typist-element'), {letterInterval:60,textInterval:50});



    var skills = {

        'frontend': [
            {'name': 'AngularJs / 2', 'expertise': 0.6},
            {'name': 'jQuery', 'expertise': 0.9},
            {'name': 'HTML', 'expertise': 0.7},
            {'name': 'CSS', 'expertise': 0.5},
            {'name': 'Bootstrap', 'expertise': 0.6}
        ],
          'backend': [
            {'name': 'Java/J2EE', 'expertise': 0.9},
            {'name': 'Spring', 'expertise': 0.9},
            {'name': 'Hibernate', 'expertise': 0.7},
            {'name': 'Liferay', 'expertise': 0.5},
            {'name': 'RESTful', 'expertise': 0.9},
            {'name': 'SOAP', 'expertise': 0.8}
        ],
         'database': [
            {'name': 'Oracle(PL/SQL)', 'expertise': 0.8},
            {'name': 'MySQL', 'expertise': 0.6},
            {'name': 'MongoDB', 'expertise': 0.5}            
        ]

    };
    var __id = 0;

    //Create element    
    for(var ele of skills.frontend){       
      appendSkills($('#frontend-skills'), ele, __id);   __id++;
    }

    for(var ele of skills.backend){       
      appendSkills($('#backend-skills'), ele, __id);   __id++;
    }

    for(var ele of skills.database){       
      appendSkills($('#database-skills'), ele, __id);   __id++;
    }

    $(window).scroll(function(){

        if( $(this).scrollTop() > 250)
            $('#navigation').css({'visibility': 'visible'});        
        else
            $('#navigation').css({'visibility': 'hidden'});        
    });
  
    
});

var appendSkills = function(parent, ele, __id){
        var child =  '<li>'+
                         '<span class=\'key\'> <strong> '+ ele.expertise*100 +'% </strong> ' + ele.name + '<span>' +
                        '<span id=\'skill-progress-'+ __id +'\'></span>' +
                    '</li>';
        parent.append( child );
        new ProgressBar.Line('#skill-progress-'+__id, {
        color: '#333',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 2.1,        
         }).animate( ele.expertise );
}
  
  
function current(_id){

    //get all lis    
    for(let ele of $('#menu').children() ){
       
        if($(ele).attr('id') == _id)
            $(ele).addClass('active')
        else
            $(ele).removeClass('active');
    }

}
