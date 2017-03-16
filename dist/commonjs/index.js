"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./telemetry-adapter"));
var aurelia_telemetry_1 = require("aurelia-telemetry");
var applicationinsights_js_1 = require("applicationinsights-js");
var telemetry_adapter_1 = require("./telemetry-adapter");
function configure(aurelia, config) {
    if (typeof config === 'function') {
        config();
    }
    else if (config) {
        applicationinsights_js_1.AppInsights.downloadAndSetup(config);
    }
    aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_adapter_1.TelemetryAdapter);
}
exports.configure = configure;
