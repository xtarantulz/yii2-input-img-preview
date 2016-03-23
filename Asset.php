<?php
namespace xtarantulz\preview;

use yii\web\AssetBundle;

class Asset extends AssetBundle
{
  	public $sourcePath = '@xtarantulz/preview/js';
	
	public $css = [];
   
	public $js = [
		'preview_image_input.js',
	];
    
	public $depends = [
       	'mihaildev\elfinder',
		'newerton\fancybox\FancyBoxAsset',
		'newerton\fancybox\FancyBoxHelpersAsset',
		'newerton\fancybox\MousewheelAsset',
	];
}
