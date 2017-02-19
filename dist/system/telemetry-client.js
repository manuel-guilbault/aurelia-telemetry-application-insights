System.register(["aurelia-logging", "aurelia-telemetry", "applicationinsights-js"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var aurelia_logging_1, aurelia_telemetry_1, applicationinsights_js_1, levelMap, ApplicationInsightsTelemetryClient;
    return {
        setters: [
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
            levelMap = new Map();
            levelMap.set(aurelia_logging_1.logLevel.debug, 'Verbose'); //AI.SeverityLevel.Verbose
            levelMap.set(aurelia_logging_1.logLevel.info, 'Information'); //AI.SeverityLevel.Information
            levelMap.set(aurelia_logging_1.logLevel.warn, 'Warning'); //AI.SeverityLevel.Warning
            levelMap.set(aurelia_logging_1.logLevel.error, 'Error'); //AI.SeverityLevel.Error
            ApplicationInsightsTelemetryClient = (function (_super) {
                __extends(ApplicationInsightsTelemetryClient, _super);
                function ApplicationInsightsTelemetryClient() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ApplicationInsightsTelemetryClient.prototype.trackPageView = function (path) {
                    applicationinsights_js_1.AppInsights.trackPageView(undefined, path);
                };
                ApplicationInsightsTelemetryClient.prototype.trackEvent = function (name, properties) {
                    applicationinsights_js_1.AppInsights.trackEvent(name, properties);
                };
                ApplicationInsightsTelemetryClient.prototype.trackError = function (error) {
                    applicationinsights_js_1.AppInsights.trackException(error);
                };
                ApplicationInsightsTelemetryClient.prototype.trackLog = function (message, level) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    applicationinsights_js_1.AppInsights.trackTrace(message, {
                        'Severity level': levelMap.get(level),
                    });
                };
                return ApplicationInsightsTelemetryClient;
            }(aurelia_telemetry_1.TelemetryClient));
            exports_1("ApplicationInsightsTelemetryClient", ApplicationInsightsTelemetryClient);
        }
    };
});
