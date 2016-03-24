<?php
namespace xtarantulz\fancybox;

use yii\web\AssetBundle;

class FancyBoxAsset extends AssetBundle
{
    public $sourcePath = '@bower';

    public $js = [
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
        'yii\web\JqueryAsset',
    ];
    
    public function registerAssetFiles($view) {
        $this->js[] = 'fancybox/source/jquery.fancybox' . (!YII_DEBUG ? '.pack' : '') . '.js';
		$this->js[] = 'jquery-mousewheel/jquery.mousewheel' . (!YII_DEBUG ? '.min' : '') . '.js';
        parent::registerAssetFiles($view);
    }
} 