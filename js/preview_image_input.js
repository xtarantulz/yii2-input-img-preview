//сделаем превиев картинок что загружаються в новостях

function check_img(value) {
    if ((value.indexOf('.png') + 1) || (value.indexOf('.jpg') + 1) || (value.indexOf('.jpeg') + 1) || (value.indexOf('.bmp') + 1) || (value.indexOf('.gif') + 1)) {
        return true;
    } else {
        return false;
    }
}

function show_preview(images) {
    images.parent().parent().find('.preview').remove();
    images.parent().before('<div class="preview"></div>');
    images_array = images.val().split(', ');
    images_array.forEach(function (item, i, arr) {
        if (item.length > 0 && check_img(item)) {
            images.parent().prev().append(
                "<div style='position:relative; display:inline-block;'>" +
                    "<a class='fa fa-times delete' style='font-size: 20px; position: absolute; right: 9px; cursor:pointer; top:1px;'></a>" +
                    "<a href='" + item + "' rel='fancybox' class='preview_fancybox'>" +
                        "<img src='" + item + "' class='preview' style='height:100px; margin-right:10px; margin-top:5px; margin-bottom:10px;'/>" +
                    "</a>" +
                "</div>"
            );
        }
    });
}

(function ($) {
    var input = 'input.form-control[type="text"]';
    if ($(input).is(input)) {
        $(input).each(function () {
            var value = $(this).val();
            if (check_img(value)) {
                show_preview($(this));
            }
        });

        $(input).change(function () {
            show_preview($(this));
        });

        $(document).on('click', '.preview .delete', function () {
            var current = $(this).parent().index();
            var images = $(this).parent().parent().parent().find(input);
            var images_val = images.val();
            images_val = images_val.split(',');
            images_val.splice(current, 1);
            images.val(images_val);
            show_preview(images);
        });

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
    }
})(jQuery);
