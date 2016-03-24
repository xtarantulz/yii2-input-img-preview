yii2-input-img-preview
=============

The module is expansion ElFinder Input. If you use a text field to add pictures displayed thumbs.

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
use xtarantulz\preview\PreviewAsset;
PreviewAsset::register($this);

echo $form->field($model, 'images')->widget(InputFile::className(), [
    'language'      => 'ru',
    'controller'    => 'elfinder', // вставляем название контроллера, по умолчанию равен elfinder
    'filter'        => 'image',    // фильтр файлов, можно задать массив фильтров https://github.com/Studio-42/elFinder/wiki/Client-configuration-options#wiki-onlyMimes
    'template'      => '<div class="input-group">{input}<span class="input-group-btn">{button}</span></div>',
    'options'       => ['class' => 'form-control'],
    'buttonOptions' => ['class' => 'btn btn-success'],
    'multiple'      => true       // возможность выбора нескольких файлов
]);
```

![screen-shot](https://github.com/xtarantulz/yii2-input-img-preview/blob/master/screen1.jpg)