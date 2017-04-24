"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var NotesServerService_1 = require("./services/NotesServerService");
var NotesComponent = (function () {
    function NotesComponent(http, notesServer) {
        this.http = http;
        this.notesServer = notesServer;
        this.notesUrl = 'notes'; // URL to web api
        this.notes = [
            { text: "Note one" },
            { text: "Note two" }
        ];
    }
    NotesComponent.prototype.add = function () {
        var note = { text: this.text, section: this.section };
        this.notes.push(note);
        this.addNote(note);
    };
    NotesComponent.prototype.addNote = function (note) {
        var _this = this;
        this.http.post(this.notesUrl, note).toPromise()
            .then(function (response) {
            _this.text = '';
        });
    };
    NotesComponent.prototype.ngOnChanges = function () {
        this.readNotes();
    };
    NotesComponent.prototype.readNotes = function () {
        var _this = this;
        this.notesServer.getNotes(this.section).subscribe(function (notes) {
            _this.notes = notes;
            console.log(notes);
        });
    };
    NotesComponent.prototype.remove = function (id) {
        var _this = this;
        console.log(id);
        var params = new URLSearchParams();
        params.set('id', id);
        this.http.delete(this.notesUrl, { search: params.toString() })
            .toPromise()
            .then(function (response) {
            console.log("note with id " + id + " removed, response", response);
            _this.readNotes();
        });
    };
    return NotesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NotesComponent.prototype, "section", void 0);
NotesComponent = __decorate([
    core_1.Component({
        selector: 'notes',
        templateUrl: './app/notes.component.html'
    })
    //     `
    ,
    __metadata("design:paramtypes", [http_1.Http, NotesServerService_1.NotesServerService])
], NotesComponent);
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map