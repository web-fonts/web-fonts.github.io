$(function() {

    $('#kbd-switcher').geokbd();

    var $body = $('body'),
        $searchNoResults = $('#uk-search-no-results'),
        grid = UIkit.grid('#uk-grid'),
        fontTabs = UIkit.switcher('#font-tabs'),
        previewArea = $('.f-preview');


    grid.on('afterupdate.uk.grid', function() {
        $searchNoResults.addClass('uk-hidden');
    });

    $body.on('click', '.show-tab', function(e) {
        fontTabs.show($(this).attr('href'));
        e.preventDefault();
    });

    $body.on('keyup', '.uk-preview-field', function(e) {
        var value = $(this).val();

        if(value === '') {
            value = preview_text;
        }

        previewArea.text(value);
        e.preventDefault();
    });

    $body.on('keyup', '.uk-search', function(e) {

        var self = $(this),
            value = self.val();
        value = value.trim();

        // if empty char
        if(!value.length) {
            grid.filter('');
        }

        // if 3 chars or more
        if(value.length > 2) {

            var result = fonts.filter(function(item) {
                return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
            });

            if(result.length) {
                grid.filter(result.join(','));
                $searchNoResults.addClass('uk-hidden');
            } else {
                grid.filter('__');
                $searchNoResults.removeClass('uk-hidden');
            }

        }

    });


    $body.on('click', 'pre', function () {

        if (this.select) {
            this.select();
        }
        else if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(this);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(this);
            window.getSelection().addRange(range);
        }
    });

});
