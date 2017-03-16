define(["require", "exports", "./telemetry-adapter", "aurelia-telemetry", "applicationinsights-js", "./telemetry-adapter"], function (require, exports, telemetry_adapter_1, aurelia_telemetry_1, applicationinsights_js_1, telemetry_adapter_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(telemetry_adapter_1);
    function configure(aurelia, config) {
        if (typeof config === 'function') {
            config();
        }
        else if (config) {
            applicationinsights_js_1.AppInsights.downloadAndSetup(config);
        }
        aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_adapter_2.TelemetryAdapter);
    }
    exports.configure = configure;
});
