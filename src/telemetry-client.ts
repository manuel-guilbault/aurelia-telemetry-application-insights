import {TelemetryClient, PageViewProperties, EventProperties, ErrorProperties, LogProperties} from 'aurelia-telemetry';
import {AppInsights} from 'applicationinsights-js';

export class ApplicationInsightsTelemetryClient extends TelemetryClient {
  
  trackPageView(properties: PageViewProperties) {
    const otherProperties = Object.assign({}, properties);
    delete otherProperties.title;
    delete otherProperties.path;

    AppInsights.trackPageView(properties.title, properties.path, otherProperties);
  }

  trackEvent(name: string, properties?: EventProperties) {
    AppInsights.trackEvent(name, properties);
  }

  trackError(error: Error, properties?: ErrorProperties) {
    AppInsights.trackException(error, undefined, properties);
  }

  trackLog(message: string, properties?: LogProperties) {
    AppInsights.trackTrace(message, properties);
  }
}
