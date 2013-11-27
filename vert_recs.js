$(document).ready(function() {
	// hover description
	$("li.vt_gallery_result").hover(function(e) {
		e.preventDefault();
		$(this).find(".vt_gallery_wrapper_toggle").css("display","block");
		$(this).find(".vt_gallery_image_description").css("display","block");
	  }), $("li.vt_gallery_result").mouseleave(function() {
		$(this).find(".vt_gallery_wrapper_toggle").css("display","none");
		$(this).find(".vt_gallery_image_description").css("display","none");
	  });

    // Gallery
    if($("#gallery").length){

        var clicked = false;
        top = 10;

        $("#gallery-prev").click(function(){
			if(clicked == true) {
	            $("#gallery").animate({
	            	top: '+=460px'
	            }, 800);
	            clicked = false;
	            $("#gallery-prev > img").removeClass("gallery-controls").addClass("gallery-controls-grey");
	            $("#gallery-next > img").removeClass("gallery-controls-grey").addClass("gallery-controls");
	            return false;
			}
        });

        $("#gallery-next").click(function(){
        	if(clicked == false) {
	            $("#gallery").animate({
	            	top: '-=460px'
	            }, 800);
	            clicked = true;
	            $("#gallery-prev > img").removeClass("gallery-controls-grey").addClass("gallery-controls");
	            $("#gallery-next > img").removeClass("gallery-controls").addClass("gallery-controls-grey");
	            return false;
	        }
        });
    }
});