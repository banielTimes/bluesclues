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
app.controller('BluescluesController', [
    '$scope',

    function($scope) {

        this.inputCode = {};

    /*    this.validateCode = function(inputCode) {
            var code;
            for (code in scope.codes) {
                if
            }
        }*/
        console.log('wired up services');
        console.log(questionData[0].code);
    }
]);

// -------------------
// Directives
// -------------------
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
