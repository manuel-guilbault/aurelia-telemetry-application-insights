import { TelemetryClient, PageViewProperties, EventProperties, ErrorProperties, LogProperties } from 'aurelia-telemetry';
export declare class ApplicationInsightsTelemetryClient extends TelemetryClient {
    trackPageView(properties: PageViewProperties): void;
    trackEvent(name: string, properties?: EventProperties): void;
    trackError(error: Error, properties?: ErrorProperties): void;
    trackLog(message: string, properties?: LogProperties): void;
}
