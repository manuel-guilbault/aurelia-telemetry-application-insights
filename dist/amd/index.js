define(["require", "exports", "./telemetry-client", "aurelia-telemetry", "./telemetry-client"], function (require, exports, telemetry_client_1, aurelia_telemetry_1, telemetry_client_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(telemetry_client_1);
    function configure(aurelia, config) {
        if (config) {
            config();
        }
        aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_client_2.ApplicationInsightsTelemetryClient);
    }
    exports.configure = configure;
});
