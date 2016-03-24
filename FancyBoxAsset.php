<?php
namespace xtarantulz\preview;

use yii\web\AssetBundle;

class FancyBoxAsset extends AssetBundle
{
    public $sourcePath = '@bower';

    public $js = [
        'jquery-mousewheel/jquery.mousewheel.js',
        'fancybox/source/jquery.fancybox.js',
        'fancybox/source/helpers/jquery.fancybox-buttons.js',
        'fancybox/source/helpers/jquery.fancybox-media.js',
        'fancybox/source/helpers/jquery.fancybox-thumbs.js'
    ];
    
    public $css = [
        'fancybox/source/jquery.fancybox.css',
		'fancybox/source/helpers/jquery.fancybox-buttons.css',
        'fancybox/source/helpers/jquery.fancybox-thumbs.css'
	];

    public $depends = [
        'yii\web\JqueryAsset'
    ];
    
}