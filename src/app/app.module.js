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
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var races_component_1 = require('./races/races.component');
var ponies_component_1 = require('./ponies/ponies.component');
var race_service_1 = require('./services/race.service');
var api_service_1 = require('./services/api.service');
var racefake_service_1 = require("./services/racefake.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.PonyRacerAppComponent,
                races_component_1.RacesComponent,
                ponies_component_1.PoniesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                api_service_1.ApiService,
                // RaceService,
                // // Fake Race Service
                // { provide: RaceService, useClass: RacefakeService }
                { provide: 'IS_PROD', useValue: true },
                {
                    provide: race_service_1.RaceService,
                    useFactory: function (IS_PROD, apiService) { return IS_PROD ? new race_service_1.RaceService(apiService) : new racefake_service_1.RacefakeService(); },
                    deps: ['IS_PROD', api_service_1.ApiService]
                }
            ],
            bootstrap: [app_component_1.PonyRacerAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map