yii2-input-img-preview

Yii2 ElFinder input img preview

Модуль являеться разширением ElFinder Input. При использовании текстового поля для добавлении картинок выводиться превью.

Использование:
use mihaildev\elfinder\InputFile;
use mihaildev\elfinder\ElFinder;
use xtarantulz\input-img-preview\InputImgPreview

echo $form->field($model, 'images')->widget(InputFile::className(), [
    'language'      => 'ru',
    'controller'    => 'elfinder', // вставляем название контроллера, по умолчанию равен elfinder
    'filter'        => 'image',    // фильтр файлов, можно задать массив фильтров https://github.com/Studio-42/elFinder/wiki/Client-configuration-options#wiki-onlyMimes
    'template'      => '<div class="input-group">{input}<span class="input-group-btn">{button}</span></div>',
    'options'       => ['class' => 'form-control'],
    'buttonOptions' => ['class' => 'btn btn-success'],
    'multiple'      => true       // возможность выбора нескольких файлов
]);
