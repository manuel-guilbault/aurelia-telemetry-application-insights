export * from './telemetry-client';
import { AppInsights } from 'applicationinsights-js';
import { TelemetryClient } from 'aurelia-telemetry';
import { ApplicationInsightsTelemetryClient } from './telemetry-client';
export function configure(aurelia, config) {
    AppInsights.downloadAndSetup(config || {});
    aurelia.singleton(TelemetryClient, ApplicationInsightsTelemetryClient);
}
