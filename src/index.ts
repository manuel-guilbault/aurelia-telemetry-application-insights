export * from './telemetry-adapter';

import {FrameworkConfiguration} from 'aurelia-framework';
import {TelemetryClient} from 'aurelia-telemetry';
import {AppInsights} from 'applicationinsights-js';

import {TelemetryAdapter} from './telemetry-adapter';

export function configure(aurelia: FrameworkConfiguration, config?: Function | Microsoft.ApplicationInsights.IConfig) {
  if (typeof config === 'function') {
    config();
  } else if (config) {
    AppInsights.downloadAndSetup(config);
  }

  aurelia.singleton(TelemetryClient, TelemetryAdapter);
}
