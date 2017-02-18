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
var aurelia_telemetry_1 = require("aurelia-telemetry");
var applicationinsights_js_1 = require("applicationinsights-js");
var ApplicationInsightsTelemetryClient = (function (_super) {
    __extends(ApplicationInsightsTelemetryClient, _super);
    function ApplicationInsightsTelemetryClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationInsightsTelemetryClient.prototype.trackPageView = function (properties) {
        var otherProperties = Object.assign({}, properties);
        delete otherProperties.title;
        delete otherProperties.path;
        applicationinsights_js_1.AppInsights.trackPageView(properties.title, properties.path, otherProperties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackEvent = function (name, properties) {
        applicationinsights_js_1.AppInsights.trackEvent(name, properties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackError = function (error, properties) {
        applicationinsights_js_1.AppInsights.trackException(error, undefined, properties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackLog = function (message, properties) {
        applicationinsights_js_1.AppInsights.trackTrace(message, properties);
    };
    return ApplicationInsightsTelemetryClient;
}(aurelia_telemetry_1.TelemetryClient));
exports.ApplicationInsightsTelemetryClient = ApplicationInsightsTelemetryClient;
