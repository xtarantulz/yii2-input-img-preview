<?php
namespace xtarantulz\yii2-input-img-preview;

class Asset extends AssetBundle
{
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
