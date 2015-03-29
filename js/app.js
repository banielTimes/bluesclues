/**
 * ******************************************************************************************************
 *
 *   Bluesclues
 *
 *   Main Application Script
 *
 *  @author     Daniel Sy
 *  @date       March 2015
 *
 * ******************************************************************************************************
 */

'use strict';

// Declare app module

var appname = 'bluesclues';
var app = angular.module(appname, [
]);


// -------------------
// Controller
// -------------------
app.controller('BluescluesController', ['$scope', function($scope) {
//        $scope.code = {digits: ''};

    $scope.validateForm = function() {
        if ($scope.codeForm.$valid) {
            console.log('code is valid!');
        } else {
            console.log('code is NOT valid!');

            $scope.codeForm.submitted = true;
        }
    };

 /*   $scope.reset = function() {
         $scope.code = {}
        $scope.codeForm.submitted = false;
    }*/
}]);


// -------------------
// Directives
// -------------------
app.directive('codeValidation', function() {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            ctrl.$parsers.unshift(function(value) {
                if (value) {
                    var valid = value === '123456';
                    ctrl.$setValidity('invalidCode', valid);
                }

                return valid ? valid : undefined;
            })
        }
    }
});

/*app.directive('validationTimeout', function($q, $timeout) {
    return {
         require: 'ngModel',
         link: function(scope, elm, attrs, ctrl) {
             var codes = ['123456'];

             ctrl.$asyncValidators.code = function(modelValue, viewValue) {
                 var def = $q.defer();

                 $timeout(function() {
                     //delayed response :P
                     if (codes.indexOf(modelValue) === -1) {
                        def.reject();
                     } else {
                        def.resolve();
                     }
                 }, 2000);

                 return def.promise;
             }
         }
    }
});*/

console.log('App booted up!');
