export * from './telemetry-adapter';
import { TelemetryClient } from 'aurelia-telemetry';
import { AppInsights } from 'applicationinsights-js';
import { TelemetryAdapter } from './telemetry-adapter';
export function configure(aurelia, config) {
    if (typeof config === 'function') {
        config();
    }
    else if (config) {
        AppInsights.downloadAndSetup(config);
    }
    aurelia.singleton(TelemetryClient, TelemetryAdapter);
}
