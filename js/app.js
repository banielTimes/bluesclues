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
    'ngMaterial'
]);

// -------------------
// Controller
// -------------------
app.controller('CluesController', [
    '$scope',
    '$filter',

    function($scope, $filter) {

        var cluesCtrl = this;
        $scope.bluescluesData = bluescluesData;

        cluesCtrl.validateCode = function(inputCode) {
            cluesCtrl.validCode = false;

            angular.forEach(bluescluesData, function (clue) {

                if (cluesCtrl.inputCode == clue.code) {
                    $scope.question = clue;

                    console.log('set code valid');
                    return cluesCtrl.validCode = true;
                };
            });
        };

    }
]);


console.log('App booted up!');
