define(["jquery","jqm","angular","commonapp/app","commonapp/Store"],function($,jqm,ng,app,Store){

    //The view controller handles the data binding
     app.ngapp.controller('HomeView',["$scope",function($scope){

         $scope.items = Store.items;

         $(document).on("pageshow","[data-ng-controller='HomeView']",function(page){
             console.debug("show");
             $scope.items.push(new Date());

             $scope.$apply();
         });
         $(document).on("pagehide","[data-ng-controller='HomeView']",function(){
             console.debug("hide");
         });
         $(document).on("pagebeforeshow","[data-ng-controller='HomeView']",function(){
             console.debug("before show");

         });
         $(document).on("pagebeforehide","[data-ng-controller='HomeView']",function(){
             console.debug("before hide");
         });

         $scope.anotherView = function(){
               app.route("../controllers/AnotherView","AnotherView.html",{transition: "slide"});
         };
         
         $scope.clickItem = function(item){
              alert(item);
         };

     }]);

});