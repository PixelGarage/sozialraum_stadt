<?php
/**
 * Created by PhpStorm.
 * User: ralph
 * Date: 06.02.15
 * Time: 17:23
 */

/**
 * Preprocess variables for the html template.
 */
function pixelgarage_preprocess_html(&$vars) {
  // make sure jQuery UI and effects is loaded for anonymous users
  drupal_add_library('system', 'ui');
  drupal_add_library('system', 'effects');

}

/**
 * Override or insert variables for the page templates.
 */
function pixelgarage_preprocess_page(&$vars) {
  // hide titles on login forms
  pg_login_preprocess_page($vars);


}

/**
 * Preprocess the bootstrap accordion plugin style for "Tagungs-Agenda".
 * @param $vars
 */
function pixelgarage_preprocess_views_bootstrap_accordion_plugin_style(&$vars) {
  $view = &$vars['view'];

    // Get zeit fields of each row.
  foreach ($view->result as $id => $row) {
    $body = $row->_entity_properties['entity object']->body;
    $vars['toggling'][$id] = !empty($body) && !empty($body[LANGUAGE_NONE][0]['value']);

    if ($view->name == "tagungs_agenda") {
      $vars['time'][$id] = strip_tags($view->style_plugin->get_field($id, 'field_zeit'));
    }
  }
}
