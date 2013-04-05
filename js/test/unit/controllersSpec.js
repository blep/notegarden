'use strict';

/* jasmine specs for controllers go here */
describe('NoteListController', function () {
    var scope = {}
    var controller;


    beforeEach(function () {
        controller = new NoteListController( scope );
    });


    it('should create "notes" with 3 notes', function () {
        expect( scope.notes.length).toBe( 3 );
    });
});
