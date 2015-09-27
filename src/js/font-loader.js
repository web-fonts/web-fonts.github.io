$(function() {


    function to_slug(str) {
        return str.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
    }

    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    $('.uk-searchable:visible').each(function() {
        $(this).waypoint({
            handler: function() {

                var self = this;
                var el = $(this.element);
                var font = el.data('title');

                var slug = to_slug(font);

                FontDetect.onFontLoaded(font, function() {
                    el.removeClass('uk-loading');
                    self.destroy();
                }, function() {
                    el.find('.uk-loading-show').text('სამწუხაროდ, ფონტი ვერ ჩაიტვირთა :(')
                }, { msTimeout: 300000 }); // try for 5m

                loadCss('//cdn.web-fonts.ge/fonts/'+slug+'/css/'+slug+'.min.css');


            },
            offset: '150%'
        });
    });

});