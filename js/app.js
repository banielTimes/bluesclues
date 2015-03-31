/**
 * ******************************************************************************************************
 *
 *   bluesclues
 *
 *   Main Application Script
 *
 *  @author     banielTimes
 *  @date       March 2015
 *
 * ******************************************************************************************************
 */

'use strict';

// Declare app module

var appname = 'bluesclues';
var app = angular.module(appname, [
    'ui.bootstrap'
]);

// -------------------
// Services
// -------------------
/*app.service('DataService', function($http, $q) {
    var _this = this;

    this.loadData = function() {
        var defer = $q.defer();

        $http.get('./data/data.js')
            .success(function(data) {
                angular.extend(_this, data)
                defer.resolve();
            })
            .error(function() {
                defer.reject('Could not load data');
            })

        return defer.promise;
    }

    return _this;
})*/

// -------------------
// Controllers
// -------------------
app.controller('CluesController', [
    '$scope',
    '$filter',

    function($scope, $filter) {

        var cluesCtrl = this;
        $scope.bluescluesData = bluescluesData;

        cluesCtrl.inputCode = {};
        cluesCtrl.validCode = {};

        cluesCtrl.validateCode = function(inputCode) {

            cluesCtrl.validCode = false;

            angular.forEach(bluescluesData, function (clue) {

                if (cluesCtrl.inputCode == clue.code) {
                    $scope.question = clue;

                    console.log('set code valid');
                    return cluesCtrl.validCode = true;
                } else {
                    return;
                };
            });

            console.log(cluesCtrl.validCode);
            console.log(cluesCtrl.inputCode);
        };

        /*$scope.question = $filter('filter')(bluescluesData, function(question) {
            return question.code == $scope.inputCode;
        })[0];

        console.log($scope.question);*/
    }
]);

// -------------------
// Directives
// -------------------
/*app.directive('question', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'question.html'
    };
});*/

// -------------------
// Services
// -------------------
/*app.factory('questionFactory', function($filter) {
    var question;

    return {
        findQuestion: function(code, data) {
            question = $filter('filter')(bluescluesData, function(question) {
                return question.code == code;
            })[0];

            return question;
        }
    };
})*/

/*app.directive('validateCode', function() {
    return {
        require: ngModel,
        link: function(scope, elem, attrs, ctrl) {
            ctrl.$parsers.unshift(function(value))
        }
    }
})*/


/*app.directive('validateCode', function() {
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
});*/

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
