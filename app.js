(var app=angular.module('lunchCheck',[]);
app.filter('split',function(){
return function(input,delimiter)
{
delimiter=delimiter||','
return input.split(delimiter);
}
});
app.controller('LunchController',function($scope)
{

$scope.item={lunch:''};
  $scope.showMsg = false;
$scope.eat=function()
{
  var items = $scope.item.lunch;
  var itemsArr = items.split(",");
  var msg = "";
$scope.msg = msg;
  $scope.showMsg = true;

  switch (true) {
    case items == "" || items == undefined:
	msg = "Please enter items";
        break;
    case itemsArr.length <= 3:
	msg = "Enjoy !";
        break;
    case itemsArr.length > 3:
        msg = "Too Much !";
        break;
  }
  $scope.msg = msg;
};

});
)();
