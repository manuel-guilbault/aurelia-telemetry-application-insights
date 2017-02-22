export * from './telemetry-client';
import { TelemetryClient } from 'aurelia-telemetry';
import { ApplicationInsightsTelemetryClient } from './telemetry-client';
export function configure(aurelia, config) {
    if (config) {
        config();
    }
    aurelia.singleton(TelemetryClient, ApplicationInsightsTelemetryClient);
}
