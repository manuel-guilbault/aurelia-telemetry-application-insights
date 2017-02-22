export * from './telemetry-client';

import {FrameworkConfiguration} from 'aurelia-framework';
import {TelemetryClient} from 'aurelia-telemetry';

import {ApplicationInsightsTelemetryClient} from './telemetry-client';

export function configure(aurelia: FrameworkConfiguration, config?: (() => void)) {
  if (config) {
    config();
  }
  aurelia.singleton(TelemetryClient, ApplicationInsightsTelemetryClient);
}
