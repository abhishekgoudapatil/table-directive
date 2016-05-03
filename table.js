var app = angular.module('app', []);

app.controller('MyCtrl', function($scope) {
  $scope.customers = [{name:"harsha",place:"belgaum",phoneno:8904898849},
                    {name:"abhishekgouda",place:"hubli",phoneno:890213145},
                    {name:"rahul",place:"hubli",phoneno:8909899888},
                    {name:"rahul",place:"dharwad",phoneno:099867897},
					{name:"rohit",place:"raichur",phoneno:76676713155}];
});


app.directive('createATable', function () {
  return {
    scope: {
      item: '=createATable'
    },
    restrict: 'EA',
    template: '<td> {{ item.name }}</td><td>{{ item.place }}</td><td> {{ item.phoneno }}</td>'
  };
});