//v 0.01
$(document).ready(()=>{
    $('#hobby-repairs').css('display','inline-block');
    $('#hobby-photo').css('display','inline-block');
    $('.slideshow').css('display','none');
    $('#hobby-slideshow1').css('display','inline-block');
    $('#photo-slideshow1').css('display','inline-block');
   
    var slideshowtracker = [1,1];

    $('.hobby').mouseover(function a(){
        $('.arrow').css('display', 'inherit');
        $('.arrow').css('animation' , 'fade 0.25s linear 1 reverse')

    })
    $('.hobby').mouseout(function a(){
        $('.arrow').css('display', 'none');
    })
    

    $('.arrow').click(function a (){
        let which = $(this).parent().find('.slideshow').attr('id').substr(0,15);
        let slideshownum = 1;
        if(which.substr(0,5) == "hobby"){
            slideshownum = slideshowtracker[0];
        }else if(which.substr(0,5) == "photo"){
            slideshownum = slideshowtracker[1];
        }

        if($(this).attr('id')=="#left-arrow"){
            if($(this).parent().find("#"+which+(slideshownum-1)).length != 0){
        
                $("#"+which+(slideshownum-1)).css("animation","fade 0.5s linear 1 reverse");
                $("#"+which+(slideshownum-1)).css("display","inline-block");
                
                $("#"+which+slideshownum).css("animation","fade 0.5s linear 1 normal");
                $("#"+which+slideshownum).css("display","none");
                slideshownum--;
            }else{
                while($(this).parent().find("#"+which+(slideshownum+1)).length != 0){
                    slideshownum++
                }
    
                $("#"+which+slideshownum).css("animation","fade 0.5s linear 1 reverse");
                $("#"+which+slideshownum).css("display","inline-block");
    
                $("#"+which+1).css("animation","fade 0.5s linear 1 normal");
                $("#"+which+1).css("display","none");
            }
        }else {
            if($(this).parent().find("#"+which+(slideshownum+1)).length != 0){
        
                $("#"+which+(slideshownum+1)).css("animation","fade 0.5s linear 1 reverse");
                $("#"+which+(slideshownum+1)).css("display","inline-block");
    
                $("#"+which+slideshownum).css("animation","fade 0.5s linear 1 normal");
                $("#"+which+slideshownum).css("display","none");
                slideshownum++;
            }else{
    
                $("#"+which+1).css("animation","fade 0.5s linear 1 reverse");
                $("#"+which+1).css("display","inline-block");
    
                $("#"+which+slideshownum).css("animation","fade 0.5s linear 1 normal");
                $("#"+which+slideshownum).css("display","none");
                slideshownum=1;
            }
        }
        
        if(which.substr(0,5) == "hobby"){
            slideshowtracker[0] = slideshownum;
        }else if(which.substr(0,5) == "photo"){
            slideshowtracker[1] = slideshownum;
        }
    })
    $('.right-arrow').click(function a (){
        let which = $(this).parent().find('.slideshow').attr('id').substr(0,15);
        let slideshownum = 1;
        if(which.substr(0,5) == "hobby"){
            slideshownum = slideshowtracker[0];
        }else if(which.substr(0,5) == "music"){
            slideshownum = slideshowtracker[1];
        }
        
        if(which.substr(0,5) == "hobby"){
            slideshowtracker[0] = slideshownum;
        }else if(which.substr(0,5) == "music"){
            slideshowtracker[1] = slideshownum;
        }
    })
    

})