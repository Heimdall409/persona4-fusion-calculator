'use strict';

var calcCtrl = function($scope, $routeParams, calcService) {

   console.log(calcService.getPersonaByName(''));
   $scope.wantedPersona = calcService.getPersonaByName($routeParams.persona_name);
   $scope.recipes = [];

   if($scope.wantedPersona.special){     

     calcService.getSpecialCombo($scope);

   }else{

     var wantedPersonaArcana = calcService.getPersonaeByArcana($scope.wantedPersona.arcana);

     //Simple Fusion results added to $scope.recipes
     calcService.resultsSimpleFusion($scope, wantedPersonaArcana);

     //Triangle Fusion results added to $scope.recipes
     calcService.resultsTriangleFusion($scope, wantedPersonaArcana);
     
     $scope.Math = window.Math;

   }
};

module.exports = calcCtrl;