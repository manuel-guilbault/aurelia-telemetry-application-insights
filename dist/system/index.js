System.register(["./telemetry-adapter", "aurelia-telemetry", "applicationinsights-js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia, config) {
        if (typeof config === 'function') {
            config();
        }
        else if (config) {
            applicationinsights_js_1.AppInsights.downloadAndSetup(config);
        }
        aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_adapter_1.TelemetryAdapter);
    }
    exports_1("configure", configure);
    var aurelia_telemetry_1, applicationinsights_js_1, telemetry_adapter_1;
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
            function (telemetry_adapter_2_1) {
                exportStar_1(telemetry_adapter_2_1);
                telemetry_adapter_1 = telemetry_adapter_2_1;
            },
            function (aurelia_telemetry_1_1) {
                aurelia_telemetry_1 = aurelia_telemetry_1_1;
            },
            function (applicationinsights_js_1_1) {
                applicationinsights_js_1 = applicationinsights_js_1_1;
            }
        ],
        execute: function () {
        }
    };
});
