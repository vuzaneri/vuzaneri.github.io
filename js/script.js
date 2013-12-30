//home page slider 
var showEffect;

//description area effect
showEffect="true";

$(document).ready(function(){
	var slider_area;
	var slider_buttons;

	// Which slider
	if ($('#slider_area').length>0){
		
		// Home Page Slider
		slider_area="#slider_area";	
		slider_buttons=".slider_thumbs";	
	
		$(slider_area).cycle({ 
			fx:     'fade', 
			timeout:  4000, 
			easing: 'backout', 
                        pager:  '.slider_thumbs', 
			cleartype:  1,
			pause:           true,     // true to enable "pause on hover"
			pauseOnPagerHover: true,   // true to pause when hovering over pager link				
			before:  onBefore, 
			after:   onAfter ,				
			pagerAnchorBuilder: function(idx) { 
				 return '.slider_thumbs li:eq(' + idx + ') a'; 
			}
		});
		
	} 

	if ($('.news_bar').length>0){
		
		// news bar
		news_bar=".news_bar"; 

		$(news_bar).cycle({ 
			fx:     'scrollDown', 
			timeout:  6000,
			cleartype:  1
		});
		
	}

	if ($('.product_image_slider').length>0){
		
		// product image slider
		product_image_slider=".p_box .thumbs";	

		$('.product_image_slider').cycle({ 
			fx:     'scrollUp', 
			timeout:  6000,
			pager:  product_image_slider, 
			cleartype:  1,
			pause:           true,     // true to enable "pause on hover"
			pauseOnPagerHover: true,   // true to pause when hovering over pager link				
			before:  onBefore, 
			after:   onAfter ,				
			pagerAnchorBuilder: function(idx) { 
				 return product_image_slider +' li:eq(' + idx + ') a'; 
			}			
		});
		
	}	
        
	function onBefore() {
		if (showEffect!="false"){
			jQuery('.desc').stop().animate({left:-700},0);
		}else{
				
		}
	}
        
	function onAfter() {
		if (showEffect!="false"){
			jQuery('.desc').stop().animate({left:0},600);
		}else{
				
		}			
	}
	
});
 
//pretty photo
$(document).ready(function(){
        $("a[rel^='prettyPhoto']").prettyPhoto();
});

//cufon fonts
$(document).ready(function(){		
         
         Cufon.replace('h1,h2,h3,h4,h5,h6, #navigation > li > a, .cufon', {
                 
                  hover: true,		  
		  textShadow: '1px 1px #fff' 
         });
         
         Cufon.replace('.desc .title', {
                 
                  hover: true
         });
});
	 
 
//drop down menu
$(document).ready(function() {
	$("#navigation li").each(function()
	{
         
            $(this).hover(function()
            {
                   
                       $(this).find('ul:first').stop().css({
                             paddingTop:"8px",                              
                             height:"auto",
                             overflow:"hidden",
                             display:"none"
                             }).slideDown(200, function()
                       {
                       $(this).css({
                             height:"auto",
                             overflow:"visible"
                       });
            });
                       
            },
            
            function()
            {	
                 $(this).find('ul:first').stop().slideUp(200, function()
                 {	
                         $(this).css({
                          display:"none",
                          overflow:"hidden"
                          });
                 });
            });	
	});
        
        $("#navigation ul ").css({
            display: "none"}
         ); 
});
 
 
$(document).ready(function() {
$(".j_ttip[title]").tooltip({

   // tweak the position
	position: "top center",
         offset: [0, 0],

   // use the "slide" effect
   effect: 'slide'

// add dynamic plugin with optional configuration for bottom edge
}).dynamic({ bottom: { direction: 'down', bounce: true } });


});


//search field function
$(document).ready(function() {
	var search_text=jQuery(".search_bar .search_text").val();

	jQuery(".search_bar .search_text").focus(function() {
		jQuery(".search_bar .search_text").val('');
	});

	jQuery(".search_bar .search_text").focus(function() {
		jQuery(".search_bar .search_text").val('');
	});
         
 
       
         jQuery(".search_bar form .searchsubmit").css( {opacity:"0"} )
         jQuery(".search_bar")

          .mouseover(function(){
                 jQuery(".search_bar form .searchsubmit").stop().animate(
                         {opacity:"1"}, 
                         {duration:500})
                 })
          .mouseout(function(){
                 jQuery(".search_bar form .searchsubmit").stop().animate(
                         {opacity:"0"}, 
                         {duration:500})
                 })
 

});



//RT Portfolio Effect
$(document).ready(function() {
        
        $(window).load(function() {
                  var portfolio_item=jQuery("a.imgeffect");
                  
                  portfolio_item.each(function(){
                  
                           var img_width = $(this).find('img').width();  
                           var img_height = $(this).find('img').innerHeight();
                           var imageClass = $(this).attr("class");
                           $(this).prepend('<span class="imagemask '+imageClass+'"></span>');
                           
                           var p = $(this).find('img');
                           var position = p.position();
                           var PosTop= parseInt(p.css("margin-top"))+position.top;
                           var PosLeft= parseInt(p.css("margin-left"))+position.left;
			   if (!PosLeft) {PosLeft= position.left};
                           
                           $(this).find('.imagemask').css({top: PosTop});
			   $(this).find('.imagemask').css({left: PosLeft});
                           
                           $('.imagemask', this).css({width:img_width,height:img_height,backgroundPosition:'center center'});
                           
                           if($.browser.msie){ $('.imagemask', this).css({display:'none'});}
                           
                  });
                  
         });
        
        
         var image_e= $("a.imgeffect");
		
		if($.browser.msie){//ignore the shadow effect if browser IE
			 
				image_e.mouseover(function(){
					 
				$(this).find('.imagemask').stop().css({
						  display:"block"
						  }); 
					 
				}).mouseout(function(){
					$(this).find('.imagemask').stop().css({
						 display:"none"
						} );
				});
			 
		}else{//real browsers :)
			 image_e.mouseover(function(){
				  
			 $(this).find('.imagemask').stop().animate({
					   display:"block",
					   opacity:1
					   }, 500); 
				  
			 }).mouseout(function(){
				 $(this).find('.imagemask').stop().animate({
					   display:"none",
					   opacity:0
					 }, 400 );
			 });                  
		}

});



 
 
//validate contact form
$(document).ready(function(){

      // show a simple loading indicator
      var loader = jQuery('<img src="images/loading.gif" alt="..." />')
              .appendTo(".loading")
              .hide();
      jQuery().ajaxStart(function() {
              loader.show();
      }).ajaxStop(function() {
              loader.hide();
      }).ajaxError(function(a, b, e) {
              throw e;
      });
      
      jQuery.validator.messages.required = "";
      var v = jQuery("#validate_form").validate({
              submitHandler: function(form) {
                      jQuery(form).ajaxSubmit({
                              target: "#result"
                      });
              }
      });
      
      jQuery("#reset").click(function() {
              v.resetForm();
      });
 });

