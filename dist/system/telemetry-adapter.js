System.register(["aurelia-framework", "aurelia-logging", "aurelia-telemetry", "applicationinsights-js"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_logging_1, aurelia_telemetry_1, applicationinsights_js_1, TelemetryAdapter, TelemetryAdapter_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (aurelia_telemetry_1_1) {
                aurelia_telemetry_1 = aurelia_telemetry_1_1;
            },
            function (applicationinsights_js_1_1) {
                applicationinsights_js_1 = applicationinsights_js_1_1;
            }
        ],
        execute: function () {
            TelemetryAdapter = TelemetryAdapter_1 = (function (_super) {
                __extends(TelemetryAdapter, _super);
                function TelemetryAdapter() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.levelMap = TelemetryAdapter_1.createDefaultLevelMap();
                    return _this;
                }
                TelemetryAdapter.createDefaultLevelMap = function () {
                    var levelMap = new Map();
                    levelMap.set(aurelia_logging_1.logLevel.debug, 'Verbose'); //AI.SeverityLevel.Verbose
                    levelMap.set(aurelia_logging_1.logLevel.info, 'Information'); //AI.SeverityLevel.Information
                    levelMap.set(aurelia_logging_1.logLevel.warn, 'Warning'); //AI.SeverityLevel.Warning
                    levelMap.set(aurelia_logging_1.logLevel.error, 'Error'); //AI.SeverityLevel.Error
                    return levelMap;
                };
                TelemetryAdapter.prototype.trackPageView = function (path) {
                    applicationinsights_js_1.AppInsights.trackPageView(undefined, path);
                };
                TelemetryAdapter.prototype.trackEvent = function (name, properties) {
                    applicationinsights_js_1.AppInsights.trackEvent(name, properties);
                };
                TelemetryAdapter.prototype.trackError = function (error) {
                    if (typeof error === 'string') {
                        error = new Error(error);
                    }
                    applicationinsights_js_1.AppInsights.trackException(error);
                };
                TelemetryAdapter.prototype.trackLog = function (message, level) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    var properties = {};
                    var severityLevel = this.levelMap.get(level);
                    if (severityLevel) {
                        properties['Severity level'] = severityLevel;
                    }
                    if (args.length) {
                        properties['Arguments'] = JSON.stringify(args);
                    }
                    applicationinsights_js_1.AppInsights.trackTrace(message, properties);
                };
                return TelemetryAdapter;
            }(aurelia_telemetry_1.TelemetryClient));
            TelemetryAdapter = TelemetryAdapter_1 = __decorate([
                aurelia_framework_1.autoinject
            ], TelemetryAdapter);
            exports_1("TelemetryAdapter", TelemetryAdapter);
        }
    };
});
