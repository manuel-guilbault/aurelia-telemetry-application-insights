"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./telemetry-client"));
var applicationinsights_js_1 = require("applicationinsights-js");
var aurelia_telemetry_1 = require("aurelia-telemetry");
var telemetry_client_1 = require("./telemetry-client");
function configure(aurelia, config) {
    applicationinsights_js_1.AppInsights.downloadAndSetup(config || {});
    aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_client_1.ApplicationInsightsTelemetryClient);
}
exports.configure = configure;
