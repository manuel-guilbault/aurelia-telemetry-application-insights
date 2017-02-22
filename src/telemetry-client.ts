import {logLevel} from 'aurelia-logging';
import {TelemetryClient} from 'aurelia-telemetry';
import {AppInsights} from 'applicationinsights-js';

export class ApplicationInsightsTelemetryClient extends TelemetryClient {

  levelMap: Map<number, string>;

  constructor() {
    super();
    this.levelMap = new Map<number, string>();
    this.levelMap.set(logLevel.debug, 'Verbose'); //AI.SeverityLevel.Verbose
    this.levelMap.set(logLevel.info, 'Information'); //AI.SeverityLevel.Information
    this.levelMap.set(logLevel.warn, 'Warning'); //AI.SeverityLevel.Warning
    this.levelMap.set(logLevel.error, 'Error'); //AI.SeverityLevel.Error
  }
  
  trackPageView(path: string) {
    AppInsights.trackPageView(undefined, path);
  }

  trackEvent(name: string, properties?: { [k: string]: any }) {
    AppInsights.trackEvent(name, properties);
  }

  trackError(error: Error | string) {
    if (typeof error === 'string') {
      error = new Error(error);
    }
    AppInsights.trackException(error);
  }

  trackLog(message: string, level: number, ...args: any[]) {
    const properties: any = {};

    const severityLevel = this.levelMap.get(level);
    if (severityLevel) {
      properties['Severity level'] = severityLevel;
    }
    if (args.length) {
      properties['Arguments'] = JSON.stringify(args);
    }

    AppInsights.trackTrace(message, properties);
  }
}
