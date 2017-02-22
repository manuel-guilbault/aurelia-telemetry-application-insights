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
var aurelia_logging_1 = require("aurelia-logging");
var aurelia_telemetry_1 = require("aurelia-telemetry");
var applicationinsights_js_1 = require("applicationinsights-js");
var ApplicationInsightsTelemetryClient = (function (_super) {
    __extends(ApplicationInsightsTelemetryClient, _super);
    function ApplicationInsightsTelemetryClient() {
        var _this = _super.call(this) || this;
        _this.levelMap = new Map();
        _this.levelMap.set(aurelia_logging_1.logLevel.debug, 'Verbose'); //AI.SeverityLevel.Verbose
        _this.levelMap.set(aurelia_logging_1.logLevel.info, 'Information'); //AI.SeverityLevel.Information
        _this.levelMap.set(aurelia_logging_1.logLevel.warn, 'Warning'); //AI.SeverityLevel.Warning
        _this.levelMap.set(aurelia_logging_1.logLevel.error, 'Error'); //AI.SeverityLevel.Error
        return _this;
    }
    ApplicationInsightsTelemetryClient.prototype.trackPageView = function (path) {
        applicationinsights_js_1.AppInsights.trackPageView(undefined, path);
    };
    ApplicationInsightsTelemetryClient.prototype.trackEvent = function (name, properties) {
        applicationinsights_js_1.AppInsights.trackEvent(name, properties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackError = function (error) {
        if (typeof error === 'string') {
            error = new Error(error);
        }
        applicationinsights_js_1.AppInsights.trackException(error);
    };
    ApplicationInsightsTelemetryClient.prototype.trackLog = function (message, level) {
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
    return ApplicationInsightsTelemetryClient;
}(aurelia_telemetry_1.TelemetryClient));
exports.ApplicationInsightsTelemetryClient = ApplicationInsightsTelemetryClient;
