<?php

	if( !defined('__IN_SYMPHONY__') ) die('<h2>Error</h2><p>You cannot directly access this file</p>');



	Class Extension_Pretty_Photo extends Extension
	{

		public function getSubscribedDelegates(){
			return array(
				array(
					'page' => '/backend/',
					'delegate' => 'InitaliseAdminPageHead',
					'callback' => 'dInitaliseAdminPageHead'
				)
			);
		}

		public function dInitaliseAdminPageHead(){
			$callback = Administration::instance()->getPageCallback();

			if( $callback['driver'] === 'publish' && in_array($callback['context']['page'], array('index', 'edit')) ) {
				$page = Administration::instance()->Page;

				// Pretty Photo
				$page->addScriptToHead(URL.'/extensions/pretty_photo/lib/pretty-photo/js/jquery.prettyPhoto.js', 103, false);
				$page->addStylesheetToHead(URL.'/extensions/pretty_photo/lib/pretty-photo/css/prettyPhoto.css', 'screen', 104, false);

				// publish
				$page->addScriptToHead(URL.'/extensions/pretty_photo/assets/pretty_photo.publish.js', 102, false);
				$page->addStylesheetToHead(URL.'/extensions/pretty_photo/assets/pretty_photo.publish.css', 'screen', 103, false);
			}
		}

	}
