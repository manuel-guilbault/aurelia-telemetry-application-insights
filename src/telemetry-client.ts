import {logLevel} from 'aurelia-logging';
import {TelemetryClient} from 'aurelia-telemetry';
import {AppInsights} from 'applicationinsights-js';

const levelMap = new Map<number, string>();
levelMap.set(logLevel.debug, 'Verbose'); //AI.SeverityLevel.Verbose
levelMap.set(logLevel.info, 'Information'); //AI.SeverityLevel.Information
levelMap.set(logLevel.warn, 'Warning'); //AI.SeverityLevel.Warning
levelMap.set(logLevel.error, 'Error'); //AI.SeverityLevel.Error

export class ApplicationInsightsTelemetryClient extends TelemetryClient {
  
  trackPageView(path: string) {
    AppInsights.trackPageView(undefined, path);
  }

  trackEvent(name: string, properties?: { [key: string]: any }) {
    AppInsights.trackEvent(name, properties);
  }

  trackError(error: Error) {
    AppInsights.trackException(error);
  }

  trackLog(message: string, level: number, ...args: any[]) {
    AppInsights.trackTrace(message, {
      'Severity level': levelMap.get(level),
    });
  }
}
