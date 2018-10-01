(function($) {
    $.fn.parallax = function(op) {
            var _this = $(this);
            var options = {
                target : undefined,
                speed : 700
            }
            for(key in op){ options[key] = op[key]; }

        
            var $navi =_this.children();
            $navi.click(function(){
                if(options.target != undefined){
                    var index = $(this).index();
                    var elm = $(options.target).eq(index).offset().top;
                    $('html, body').stop().animate({scrollTop : elm}, options.speed);
                }
            });

        
            $(window).scroll(function(){ parallaxNavi(); });
            parallaxNavi();
            function parallaxNavi(){
                if(options.target != undefined){
                var scoll = $(window).scrollTop();
                $(options.target).each(function(index){
                    if($(this).offset().top <= scoll){
                        $navi.removeClass('selected');
                        $navi.eq(index).addClass('selected');
                    }
                });
                }
            }
    };
})(jQuery);

