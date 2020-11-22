<?php
/*
Plugin Name: Simun Emanuel Putovanja Web Fixes
Plugin URI: https://idzan.eu
Description: Advanced fixes for web site
Author: Idzan Marko
Version: 1.0
*/

function remove_href_attribute() {
    $plugin_url = plugin_dir_url(__FILE__);
    wp_register_script('code', $plugin_url . 'js/code.js');
    wp_enqueue_script('code');
}
add_action( 'wp_footer', 'remove_href_attribute' );