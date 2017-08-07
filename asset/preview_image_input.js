//сделаем превиев картинок что загружаються в новостях

function check_img(value) {
    value = value.toLowerCase();

    if((value.indexOf('.png') + 1) || (value.indexOf('.jpg') + 1) || (value.indexOf('.jpeg') + 1) || (value.indexOf('.bmp') + 1) || (value.indexOf('.gif') + 1)) {
        return true;
    } else {
        return false;
    }
}

function preview_reposition(images) {
    var val='';
    $('li a img',images).each(function(){
        if(val!='') val=val+', ';
        val=val+$(this).attr('src');
    });
    images.next().find('input.img').val(val);
}

function show_preview(images) {
    images_array = images.val().split(', ');
    images_array.forEach(function (item, i, arr) {
        if (item.length > 0 && check_img(item)) {
            images.parent().prev().append(
                "<li>" +
                    "<a class='fa fa-times delete'></a>" +
                    "<a href='" + item + "' rel='fancybox' class='preview_fancybox'>" +
                        "<img src='" + item + "'/>" +
                    "</a>" +
                "</li>"
            );
        }
    });
}

(function ($) {
    var input = 'input.form-control.img[type="text"]';
    if ($(input).is(input)) {
        $(input).each(function () {
            $(this).parent().before('<ul class="preview"></ul>');
            show_preview($(this));
        });

        $(input).change(function () {
            $(this).parent().parent().find('.preview').html('');
            show_preview($(this));
        });

        $(document).on('click', '.preview .delete', function () {
            var current = $(this).parent().index();
            var images = $(this).parent().parent().parent().find(input);
            var images_val = images.val();
            images_val = images_val.split(',');
            images_val.splice(current, 1);
            images.val(images_val);
            images.parent().parent().find('.preview').html('');
            show_preview(images);
        });
    }

    $('a.preview_fancybox[rel=fancybox]').fancybox({
        'maxWidth': '90%',
        'maxHeight': '90%',
        'playSpeed': 7000,
        'padding': 0,
        'fitToView': false,
        'width': '100%',
        'height': '100%',
        'autoSize': true,
        'closeClick': false,
        'openEffect': 'elastic',
        'closeEffect': 'elastic',
        'prevEffect': 'elastic',
        'nextEffect': 'elastic',
        'closeBtn': false,
        'openOpacity': true,
        'helpers': {
            'title': {'type': 'float'},
            'buttons': {},
            'thumbs': {'width': 100, 'height': 100},
            'overlay': {
                'css': {
                    'background': 'rgba(0, 0, 0, 0.8)'
                }
            }
        },
    });

    $(".preview").sortable({
        update: function( event, ui ) {
            preview_reposition($(this));
        }
    });
})(jQuery);
