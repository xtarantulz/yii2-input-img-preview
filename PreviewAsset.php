<?php
namespace xtarantulz\preview;

use yii\web\AssetBundle;

class PreviewAsset extends AssetBundle
{
	public $css = array();
	
	public $js = array(
		'preview_image_input.js',
	);
	
	public $depends = array(
		'newerton\fancybox\FancyBoxAsset',
		'newerton\fancybox\FancyBoxHelpersAsset',
		'newerton\fancybox\MousewheelAsset',
	);
	
	public function init()
	{
		$this->sourcePath = __DIR__."/js";
		parent::init();
	}
}
