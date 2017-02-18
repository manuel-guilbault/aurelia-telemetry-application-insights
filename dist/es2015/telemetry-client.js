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
import { TelemetryClient } from 'aurelia-telemetry';
import { AppInsights } from 'applicationinsights-js';
var ApplicationInsightsTelemetryClient = (function (_super) {
    __extends(ApplicationInsightsTelemetryClient, _super);
    function ApplicationInsightsTelemetryClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationInsightsTelemetryClient.prototype.trackPageView = function (properties) {
        var otherProperties = Object.assign({}, properties);
        delete otherProperties.title;
        delete otherProperties.path;
        AppInsights.trackPageView(properties.title, properties.path, otherProperties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackEvent = function (name, properties) {
        AppInsights.trackEvent(name, properties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackError = function (error, properties) {
        AppInsights.trackException(error, undefined, properties);
    };
    ApplicationInsightsTelemetryClient.prototype.trackLog = function (message, properties) {
        AppInsights.trackTrace(message, properties);
    };
    return ApplicationInsightsTelemetryClient;
}(TelemetryClient));
export { ApplicationInsightsTelemetryClient };
