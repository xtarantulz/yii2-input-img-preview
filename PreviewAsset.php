<?php
namespace xtarantulz\preview;

use yii\web\AssetBundle;

class PreviewAsset extends AssetBundle
{
	public $css = array(
		'preview_image_input.css'
	);
	
	public $js = array(
		'preview_image_input.js',
	);
	
	public $depends = array(
		'xtarantulz\preview\FancyBoxAsset',
	);
	
	public function init()
	{
		$this->sourcePath = __DIR__."/asset";
		parent::init();
	}
}
