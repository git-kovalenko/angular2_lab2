"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var notes_component_1 = require("./notes.component");
var sections_component_1 = require("./sections.component");
var http_1 = require("@angular/http");
var ng2_dragula_1 = require("ng2-dragula");
var SectionFilterPipe_1 = require("./SectionFilterPipe");
var router_1 = require("@angular/router");
var NotesEditorComponent_1 = require("./NotesEditorComponent");
var PageNotFoundComponent_1 = require("./PageNotFoundComponent");
var ViewSectionComponent_1 = require("./ViewSectionComponent");
var NotesServerService_1 = require("./services/NotesServerService");
var CanDeactivateNote_1 = require("./CanDeactivateNote");
var userForm_component_1 = require("./userForm/userForm.component");
var EqualToValidator_1 = require("./userForm/directives/EqualToValidator");
var UserUniqueValidator_1 = require("./userForm/directives/UserUniqueValidator");
var AgeGtValidator_1 = require("./userForm/directives/AgeGtValidator");
var appRoutes = [
    { path: '', component: NotesEditorComponent_1.NotesEditorComponent, canDeactivate: [CanDeactivateNote_1.CanDeactivateNote] },
    { path: 'viewSection/:name', component: ViewSectionComponent_1.ViewSectionComponent },
    { path: 'register', component: userForm_component_1.UserFormComponent },
    { path: ':name', component: NotesEditorComponent_1.NotesEditorComponent, canDeactivate: [CanDeactivateNote_1.CanDeactivateNote] },
    { path: '**', component: PageNotFoundComponent_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, ng2_dragula_1.DragulaModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, notes_component_1.NotesComponent, sections_component_1.SectionsComponent, SectionFilterPipe_1.SectionFilterPipe, NotesEditorComponent_1.NotesEditorComponent, PageNotFoundComponent_1.PageNotFoundComponent, ViewSectionComponent_1.ViewSectionComponent, userForm_component_1.UserFormComponent, EqualToValidator_1.EqualToValidator, UserUniqueValidator_1.UserUniqueValidator, AgeGtValidator_1.AgeGtValidator],
        bootstrap: [app_component_1.AppComponent],
        providers: [NotesServerService_1.NotesServerService, CanDeactivateNote_1.CanDeactivateNote]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map