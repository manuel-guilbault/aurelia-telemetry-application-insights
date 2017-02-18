System.register(["./telemetry-client", "applicationinsights-js", "aurelia-telemetry"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia, config) {
        applicationinsights_js_1.AppInsights.downloadAndSetup(config || {});
        aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_client_1.ApplicationInsightsTelemetryClient);
    }
    exports_1("configure", configure);
    var applicationinsights_js_1, aurelia_telemetry_1, telemetry_client_1;
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (telemetry_client_2_1) {
                exportStar_1(telemetry_client_2_1);
                telemetry_client_1 = telemetry_client_2_1;
            },
            function (applicationinsights_js_1_1) {
                applicationinsights_js_1 = applicationinsights_js_1_1;
            },
            function (aurelia_telemetry_1_1) {
                aurelia_telemetry_1 = aurelia_telemetry_1_1;
            }
        ],
        execute: function () {
        }
    };
});
