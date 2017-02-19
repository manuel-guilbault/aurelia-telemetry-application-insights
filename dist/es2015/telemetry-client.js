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
var levelMap = new Map();
levelMap.set(logLevel.debug, 'Verbose'); //AI.SeverityLevel.Verbose
levelMap.set(logLevel.info, 'Information'); //AI.SeverityLevel.Information
levelMap.set(logLevel.warn, 'Warning'); //AI.SeverityLevel.Warning
levelMap.set(logLevel.error, 'Error'); //AI.SeverityLevel.Error
var ApplicationInsightsTelemetryClient = (function (_super) {
    __extends(ApplicationInsightsTelemetryClient, _super);
    function ApplicationInsightsTelemetryClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationInsightsTelemetryClient.prototype.trackPageView = function (path) {
        AppInsights.trackPageView(undefined, path);
    };
    ApplicationInsightsTelemetryClient.prototype.trackEvent = function (name, properties) {
        AppInsights.trackEvent(name, properties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackError = function (error) {
        AppInsights.trackException(error);
    };
    ApplicationInsightsTelemetryClient.prototype.trackLog = function (message, level) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        AppInsights.trackTrace(message, {
            'Severity level': levelMap.get(level),
        });
    };
    return ApplicationInsightsTelemetryClient;
}(TelemetryClient));
export { ApplicationInsightsTelemetryClient };
