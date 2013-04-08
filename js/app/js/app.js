'use strict';


// Declare app level module which depends on filters, and services
angular.module('noteGarden', ['noteGarden.filters', 'noteGarden.services', 'noteGarden.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/catalog/:catalogId/edit', {
        templateUrl: 'partials/catalog-edit.html',
        controller: CatalogEditController } );
    $routeProvider.when('/notes', {templateUrl: 'partials/notes-list.html', controller: NoteListController});
    $routeProvider.when('/notes/:noteId', {templateUrl: 'partials/note-detail.html', controller: NoteDetailController});
    $routeProvider.otherwise({redirectTo: '/notes'});
  }]);
