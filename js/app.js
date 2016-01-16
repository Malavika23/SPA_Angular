var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/index', {
            templateUrl: 'templates/index1.html',
            controller: 'myCtrl1'
        })
        .when('/tables', {
        templateUrl: 'templates/tables.html',
        controller: 'myCtrl2'
    })
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'myCtrl3'
    })
    .when('/panel', {
        templateUrl: 'templates/panel.html',
        controller: 'myCtrl4'
    })
    .when('/blank', {
        templateUrl: 'templates/blank.html',
        controller: 'myCtrl5'
    })
    .when('/form', {
        templateUrl: 'templates/form.html',
        controller: 'myCtrl6'
    })
    
});

app.controller('myCtrl', function ($scope) {
    $scope.menu = [
        { link:'index','title': 'Dashboard', 'icon': 'fa fa-dashboard' },
        { 'title': 'Charts', 'icon': 'fa fa-line-chart', submenu: [{ title: 'float-charts'}, { title: 'MorrisJS Charts'}] },
        { link: 'tables', 'title': 'Tables', 'icon': 'fa fa-table' },
        { link: 'form', 'title': 'Forms', 'icon': 'fa fa-pencil' },
        {
            'title': 'UI Elements', 'icon': 'fa fa-gear',
            submenu: [{ link: 'panel', title: 'Panels' }, { link: 'index-ng.html', title: 'Buttons' }, { title: 'Notifications' }, { title: 'Topography' }]
        },
        {
            'title': 'Multiple Dropdowns', 'icon': 'fa fa-sitemap',
            submenu: [{ title: 'SecondLevel' }, { title: 'Third Level', sub: [{ title: '3-1' }, { title: '3-2' }] }]
        },
        {
            'title': 'Sample-pages', 'icon': 'fa fa-map',
            submenu: [{ link: 'blank', title: 'blank' }, { link: 'login', title: 'Login' }]
        }
    ];

     
  });
    
