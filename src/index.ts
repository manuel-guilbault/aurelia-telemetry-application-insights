export * from './telemetry-client';

import {FrameworkConfiguration} from 'aurelia-framework';
import {AppInsights} from 'applicationinsights-js';
import {TelemetryClient} from 'aurelia-telemetry';

import {ApplicationInsightsTelemetryClient} from './telemetry-client';

export function configure(aurelia: FrameworkConfiguration, config?: Microsoft.ApplicationInsights.IConfig) {
  AppInsights.downloadAndSetup(config || {});
  aurelia.singleton(TelemetryClient, ApplicationInsightsTelemetryClient);
}
