'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function NoteListController($scope, $http) {
    $http.get('notes/notes.json').success(function(data) {
        $scope.notes = data;
    });

    $scope.orderProp = 'age';
}
NoteListController.$inject = ['$scope', '$http']

function NoteDetailController($scope, $routeParams) {
    $scope.noteId = $routeParams.noteId;
}
NoteDetailController.$inject = ['$scope', '$routeParams']
