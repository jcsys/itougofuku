angular.module('AceApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/layouts/default/partial/breadcrumbs.html',
    "<ui-breadcrumb home=\"'fa fa-home'\"></ui-breadcrumb> <div class=nav-search id=nav-search> <form class=form-search> <span class=input-icon> <input placeholder=\"Search ...\" class=nav-search-input autocomplete=off ng-model=typeaheadSelected uib-typeahead=\"state.name for state in getCommonData('states') | filter:$viewValue | limitTo:8\"> <i class=\"ace-icon fa fa-search nav-search-icon\"></i> </span> </form> </div>"
  );


  $templateCache.put('views/layouts/default/partial/footer.html',
    "<div class=footer-inner> <div class=footer-content> <span class=bigger-120><span class=\"blue bolder\">Ace</span> Application &copy; 2013-2014</span> &nbsp; &nbsp; <span class=action-buttons> <a href=\"\"> <i class=\"ace-icon fa fa-twitter-square light-blue bigger-150\"></i> </a> <a href=\"\"> <i class=\"ace-icon fa fa-facebook-square text-primary bigger-150\"></i> </a> <a href=\"\"> <i class=\"ace-icon fa fa-rss-square orange bigger-150\"></i> </a> </span> </div> </div>"
  );


  $templateCache.put('views/layouts/default/partial/navbar.html',
    "<div class=navbar-container ng-class=\"{'container': ace.settings.container}\"> <button type=button class=\"navbar-toggle menu-toggler pull-left\" id=menu-toggler data-target=#sidebar> <span class=sr-only>Toggle sidebar</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <div class=\"navbar-header pull-left\"> <a href=# class=navbar-brand> <small> <i class=\"fa fa-leaf\"></i> Ace Admin </small> </a> </div> <div class=\"navbar-buttons navbar-header pull-right\" role=navigation> <ul class=\"nav ace-nav\"> <li uib-dropdown class=grey ng-include src=\"'views/layouts/default/partial/navbar/tasks.html'\"></li> <li uib-dropdown class=purple ng-include src=\"'views/layouts/default/partial/navbar/notifications.html'\"></li> <li uib-dropdown class=green ng-include src=\"'views/layouts/default/partial/navbar/messages.html'\"></li> <li uib-dropdown class=light-blue ng-include src=\"'views/layouts/default/partial/navbar/user_menu.html'\"></li> </ul> </div> </div>"
  );


  $templateCache.put('views/layouts/default/partial/settings.html',
    " <div class=\"btn btn-app btn-xs btn-warning ace-settings-btn\" ng-class=\"{'open': ace.settings.is_open}\" ng-click=ace.settings.open()> <i class=\"ace-icon fa fa-cog bigger-130\"></i> </div> <div class=\"ace-settings-box clearfix\" ng-class=\"{'open': ace.settings.is_open}\"> <div class=\"pull-left width-50\">  <div class=ace-settings-item> <div class=pull-left> <div ace-colorpicker colors=\"{'#438EB9': 0, '#222A2D': 1, '#C6487E': 2, '#D0D0D0': 3}\" ng-model=ace.settings.skinColor ng-value=ace.settings.skinIndex></div> </div> <span>&nbsp; Choose Skin</span> </div>   <div class=ace-settings-item> <input type=checkbox class=\"ace ace-checkbox-2 ace-save-state\" id=ace-settings-navbar autocomplete=off ng-model=\"ace.settings.navbar\"> <label class=lbl for=ace-settings-navbar> Fixed Navbar</label> </div>   <div class=ace-settings-item> <input type=checkbox class=\"ace ace-checkbox-2 ace-save-state\" id=ace-settings-sidebar autocomplete=off ng-model=\"ace.settings.sidebar\"> <label class=lbl for=ace-settings-sidebar> Fixed Sidebar</label> </div>   <div class=ace-settings-item> <input type=checkbox class=\"ace ace-checkbox-2 ace-save-state\" id=ace-settings-breadcrumbs autocomplete=off ng-model=\"ace.settings.breadcrumbs\"> <label class=lbl for=ace-settings-breadcrumbs> Fixed Breadcrumbs</label> </div>      <div class=ace-settings-item> <input type=checkbox class=\"ace ace-checkbox-2 ace-save-state\" id=ace-settings-add-container autocomplete=off ng-model=\"ace.settings.container\"> <label class=lbl for=ace-settings-add-container> Inside <b>.container</b> </label> </div>  </div> <div class=\"pull-left width-50\">  <div class=ace-settings-item> <input type=checkbox class=\"ace ace-checkbox-2\" id=ace-settings-hover autocomplete=off ng-model=\"ace.settings.hover\"> <label class=lbl for=ace-settings-hover> Submenu on Hover</label> </div> <div class=ace-settings-item> <input type=checkbox class=\"ace ace-checkbox-2\" id=ace-settings-compact autocomplete=off ng-model=\"ace.settings.compact\"> <label class=lbl for=ace-settings-compact> Compact Sidebar</label> </div> <div class=ace-settings-item> <input type=checkbox class=\"ace ace-checkbox-2\" id=ace-settings-highlight autocomplete=off ng-model=\"ace.settings.highlight\"> <label class=lbl for=ace-settings-highlight> Alt. Active Item</label> </div>  </div> </div> "
  );


  $templateCache.put('views/layouts/default/partial/sidebar.html',
    "<div class=sidebar-shortcuts ng-include=\"'views/layouts/default/partial/sidebar/shortcuts.html'\"></div> <ul class=\"nav nav-list\"> <li ng-repeat=\"item in ::sidebar.root\" ng-include=\"'views/layouts/default/partial/sidebar/item.html'\" ng-class=\"{'open':item.submenu && isSubOpen(item.name), 'active': isActiveItem(item.name), 'hover': $parent.ace.settings.hover, 'highlight': $parent.ace.settings.highlight}\"></li> </ul> <div class=\"sidebar-toggle sidebar-collapse\"> <i class=\"ace-icon fa\" ng-class=\"{'fa-angle-double-left': !ace.sidebar.minimized, 'fa-angle-double-right': ace.sidebar.minimized}\"></i> </div>"
  );


  $templateCache.put('views/layouts/default/partial/navbar/messages.html',
    "<a href=\"\" uib-dropdown-toggle class=dropdown-toggle> <i class=\"ace-icon fa fa-envelope icon-animated-vertical\"></i> <span class=\"badge badge-success\" ng-bind=\"::getCommonData('navbar').messages.count\"></span> </a> <ul class=\"dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close\"> <li class=dropdown-header> <i class=\"ace-icon fa fa-envelope-o\"></i> {{::getCommonData('navbar').messages.count}} Messages </li> <li class=dropdown-content ace-scroll options=\"{'size': 200, 'mouseWheelLock': true, 'reset': false}\"> <ul class=\"dropdown-menu dropdown-navbar\"> <li ng-repeat=\"message in ::getCommonData('navbar').messages.latest\"> <a href=\"\" class=clearfix> <img ng-src={{ace.path.assets}}/avatars/{{message.img}} class=msg-photo alt=\"{{message.name}}'s Avatar\"> <span class=msg-body> <span class=msg-title> <span class=blue>{{message.name}}:</span> {{message.summary}} </span> <span class=msg-time> <i class=\"ace-icon fa fa-clock-o\"></i> <span>{{message.time}}</span> </span> </span> </a> </li> </ul> </li> <li class=dropdown-footer> <a href=/inbox> See all messages <i class=\"ace-icon fa fa-arrow-right\"></i> </a> </li> </ul>"
  );


  $templateCache.put('views/layouts/default/partial/navbar/notifications.html',
    "<a href=\"\" uib-dropdown-toggle class=dropdown-toggle> <i class=\"ace-icon fa fa-bell icon-animated-bell\"></i> <span class=\"badge badge-important\" ng-bind=\"::getCommonData('navbar').notifications.count\"></span> </a> <ul class=\"dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close\"> <li class=dropdown-header> <i class=\"ace-icon fa fa-exclamation-triangle\"></i> {{::getCommonData('navbar').notifications.count}} Notifications </li> <li class=dropdown-content ace-scroll options=\"{'size': 200, 'mouseWheelLock': true, 'reset': false}\"> <ul class=\"dropdown-menu dropdown-navbar navbar-pink\"> <li ng-repeat=\"notification in ::getCommonData('navbar').notifications.latest\"> <a href=\"\"> <div ng-if=notification.badge class=clearfix> <span class=pull-left><i class=\"btn btn-xs no-hover {{notification['icon-class']}} {{notification.icon}}\"></i> {{notification.title}}</span> <span class=\"pull-right badge {{notification['badge-class']}}\">{{notification.badge}}</span> </div> <div ng-if=!notification.badge> <i class=\"btn btn-xs {{notification['icon-class']}} {{notification.icon}}\"></i> {{notification.title}} </div> </a> </li> </ul> </li> <li class=dropdown-footer> <a href=\"\"> See all notifications <i class=\"ace-icon fa fa-arrow-right\"></i> </a> </li> </ul>"
  );


  $templateCache.put('views/layouts/default/partial/navbar/tasks.html',
    "<a href=\"\" uib-dropdown-toggle class=dropdown-toggle> <i class=\"ace-icon fa fa-tasks\"></i> <span class=\"badge badge-grey\" ng-bind=\"::getCommonData('navbar').tasks.count\"></span> </a> <ul class=\"dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close\"> <li class=dropdown-header> <i class=\"ace-icon fa fa-check\"></i> {{::getCommonData('navbar').tasks.count}} Tasks to complete </li> <li class=dropdown-content ace-scroll options=\"{'size': 200, 'mouseWheelLock': true, 'reset': false}\"> <ul class=\"dropdown-menu dropdown-navbar\"> <li ng-repeat=\"task in ::getCommonData('navbar').tasks.latest\"> <a href=\"\"> <div class=clearfix> <span class=pull-left>{{task.title}}</span> <span class=pull-right>{{task.percentage}}%</span> </div> <uib-progressbar ng-class=\"['progress-mini' , task['progress-class'] || '']\" value=task.percentage type=\"{{task['progress-bar-type']}}\"></uib-progressbar> </a> </li> </ul> </li> <li class=dropdown-footer> <a href=\"\"> See tasks with details <i class=\"ace-icon fa fa-arrow-right\"></i> </a> </li> </ul>"
  );


  $templateCache.put('views/layouts/default/partial/navbar/user_menu.html',
    "<a href=\"\" uib-dropdown-toggle class=dropdown-toggle> <img class=nav-user-photo ng-src={{ace.path.assets}}/avatars/user.jpg alt=\"Jason's Photo\"> <span class=user-info> <small>Welcome,</small> Jason </span> <i class=\"ace-icon fa fa-caret-down\"></i> </a> <ul class=\"user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close\"> <li><a href=\"\"><i class=\"ace-icon fa fa-cog\"></i> Settings</a></li> <li><a href=#/profile><i class=\"ace-icon fa fa-user\"></i> Profile</a></li> <li class=divider></li> <li><a href=\"\"><i class=\"ace-icon fa fa-power-off\"></i> Logout</a></li> </ul>"
  );


  $templateCache.put('views/layouts/default/partial/sidebar/item.html',
    "<a ng-if=!item.submenu ui-sref={{item.url}}> <i ng-if=item.icon class=menu-icon ng-class=[item.icon]></i> <span ng-if=\"item['level-1']\" class=menu-text> {{::item.title}} <span ng-if=item.badge ng-class=\"['badge', item['badge-class'], item['tooltip-class']]\" uib-tooltip-html=\"'{{item.tooltip}}'\" tooltip-placement=right ng-bind-html=::item.badge></span> <span ng-if=item.label ng-class=\"['label', item['label-class']]\" ng-attr-title=\"{{item['label-title']}}\" ng-bind=::item.label></span> </span> <i ng-if=\"!item.icon && item['level-2']\" class=\"menu-icon fa fa-caret-right\"></i> <span ng-if=\"!item['level-1']\">{{::item.title}}</span> </a> <a ng-if=item.submenu href=\"\" ng-class=\"'dropdown-toggle'\" ng-click=toggleSubmenu(item.name)> <i ng-if=item.icon class=menu-icon ng-class=[item.icon]></i> <span class=menu-text> {{::item.title}} <span ng-if=item.badge ng-class=\"['badge', item['badge-class'], item['tooltip-class']]\" uib-tooltip-html=\"'{{item.tooltip}}'\" tooltip-placement=right ng-bind-html=::item.badge></span> <span ng-if=item.label ng-class=\"['label', item['label-class']]\" ng-attr-title=\"{{item['label-title']}}\" ng-bind=::item.label></span> </span> <b class=\"arrow fa fa-angle-down\"></b> </a> <b class=arrow></b> <ul class=submenu ng-if=item.submenu ng-attr-data-name={{item.name}}> <li ng-repeat=\"item in ::item.submenu\" ng-include=\"'views/layouts/default/partial/sidebar/item.html'\" ng-class=\"{'open':item.submenu && isSubOpen(item.name), 'active': isActiveItem(item.name), 'hover': $parent.ace.settings.hover}\"></li> </ul>"
  );


  $templateCache.put('views/layouts/default/partial/sidebar/shortcuts.html',
    "<div class=sidebar-shortcuts-large id=sidebar-shortcuts-large> <button class=\"btn btn-success\"><i class=\"ace-icon fa fa-signal\"></i></button> <button class=\"btn btn-info\"><i class=\"ace-icon fa fa-pencil\"></i></button> <button class=\"btn btn-warning\"><i class=\"ace-icon fa fa-users\"></i></button> <button class=\"btn btn-danger\"><i class=\"ace-icon fa fa-cogs\"></i></button> </div> <div class=sidebar-shortcuts-mini id=sidebar-shortcuts-mini> <span class=\"btn btn-success\"></span> <span class=\"btn btn-info\"></span> <span class=\"btn btn-warning\"></span> <span class=\"btn btn-danger\"></span> </div>"
  );

}]);
