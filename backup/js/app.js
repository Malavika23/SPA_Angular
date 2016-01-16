var app = angular.module('myApp', []);
app.factory('productService', function ($http, $q) {
    return {
        getProducts: function () {
            var deferred = $q.defer();
            $http.get('http://localhost:47503/api/products').success(function (successData) {
                deferred.resolve(successData);
            });
            return deferred.promise;
        }
    }

    
});

app
  .config(function ($httpProvider) {
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

app.controller('myCtrl', function ($scope, productService) {
    $scope.menu = [
        { link:'index-ng.html','title': 'Dashboard', 'icon': 'fa fa-dashboard' },
        { 'title': 'Charts', 'icon': 'fa fa-line-chart', submenu: [{ title: 'float-charts'}, { title: 'MorrisJS Charts'}] },
        { link: 'tables.html', 'title': 'Tables', 'icon': 'fa fa-table' },
        { link: 'form.html', 'title': 'Forms', 'icon': 'fa fa-pencil' },
        {
            'title': 'UI Elements', 'icon': 'fa fa-gear',
            submenu: [{ link: 'panel.html', title: 'Panels' }, { link: 'index-ng.html', title: 'Buttons' }, { title: 'Notifications' }, { title: 'Topography' }]
        },
        {
            'title': 'Multiple Dropdowns', 'icon': 'fa fa-sitemap',
            submenu: [{ title: 'SecondLevel' }, { title: 'Third Level', sub: [{ title: '3-1' }, { title: '3-2' }] }]
        },
        {
            'title': 'Sample-pages', 'icon': 'fa fa-map',
            submenu: [{ link: 'blank.html', title: 'blank' }, { link: 'login.html', title: 'Login' }]
        }
    ];

    $scope.displayProducts = function () {
        productService.getProducts().then(function (successdata) {
            console.log(successData);
        });
    };
    $scope.displayProducts();
});


