yii2-input-img-preview
Yii2 ElFinder input img preview

Модуль являеться разширением ElFinder Input. При использовании текстового поля для добавлении картинок выводиться превью.

Установка:

```
php composer.phar require --prefer-dist xtarantulz/yii2-input-img-preview "dev-master"
```

Использование:

```php
<?php
    use mihaildev\elfinder\InputFile;
    use mihaildev\elfinder\ElFinder;
    use xtarantulz\input-img-preview\InputImgPreview;

    echo $form->field($model, 'images')->widget(InputFile::className(), [
        'language'      => 'ru',
        'controller'    => 'elfinder', // вставляем название контроллера, по умолчанию равен elfinder
        'filter'        => 'image',    // фильтр файлов, можно задать массив фильтров https://github.com/Studio-42/elFinder/wiki/Client-configuration-options#wiki-onlyMimes
        'template'      => '<div class="input-group">{input}<span class="input-group-btn">{button}</span></div>',
        'options'       => ['class' => 'form-control'],
        'buttonOptions' => ['class' => 'btn btn-success'],
        'multiple'      => true       // возможность выбора нескольких файлов
    ]);
?>
```



yii2-input-img-preview
=============

The module is razšireniem ElFinder Input. If you use a text field to add pictures displayed thumbs.

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist xtarantulz/yii2-input-img-preview "dev-master"
```

or add

```
"xtarantulz/yii2-input-img-preview": "dev-master"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
use mihaildev\elfinder\InputFile;
use mihaildev\elfinder\ElFinder;
use xtarantulz\input-img-preview\InputImgPreview;

echo $form->field($model, 'images')->widget(InputFile::className(), [
    'language'      => 'ru',
    'controller'    => 'elfinder', // вставляем название контроллера, по умолчанию равен elfinder
    'filter'        => 'image',    // фильтр файлов, можно задать массив фильтров https://github.com/Studio-42/elFinder/wiki/Client-configuration-options#wiki-onlyMimes
    'template'      => '<div class="input-group">{input}<span class="input-group-btn">{button}</span></div>',
    'options'       => ['class' => 'form-control'],
    'buttonOptions' => ['class' => 'btn btn-success'],
    'multiple'      => true       // возможность выбора нескольких файлов
]);
```php