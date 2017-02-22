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
import { logLevel } from 'aurelia-logging';
import { TelemetryClient } from 'aurelia-telemetry';
import { AppInsights } from 'applicationinsights-js';
var ApplicationInsightsTelemetryClient = (function (_super) {
    __extends(ApplicationInsightsTelemetryClient, _super);
    function ApplicationInsightsTelemetryClient() {
        var _this = _super.call(this) || this;
        _this.levelMap = new Map();
        _this.levelMap.set(logLevel.debug, 'Verbose'); //AI.SeverityLevel.Verbose
        _this.levelMap.set(logLevel.info, 'Information'); //AI.SeverityLevel.Information
        _this.levelMap.set(logLevel.warn, 'Warning'); //AI.SeverityLevel.Warning
        _this.levelMap.set(logLevel.error, 'Error'); //AI.SeverityLevel.Error
        return _this;
    }
    ApplicationInsightsTelemetryClient.prototype.trackPageView = function (path) {
        AppInsights.trackPageView(undefined, path);
    };
    ApplicationInsightsTelemetryClient.prototype.trackEvent = function (name, properties) {
        AppInsights.trackEvent(name, properties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackError = function (error) {
        if (typeof error === 'string') {
            error = new Error(error);
        }
        AppInsights.trackException(error);
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
        AppInsights.trackTrace(message, properties);
    };
    return ApplicationInsightsTelemetryClient;
}(TelemetryClient));
export { ApplicationInsightsTelemetryClient };
