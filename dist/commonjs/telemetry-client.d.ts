import { TelemetryClient } from 'aurelia-telemetry';
export declare class ApplicationInsightsTelemetryClient extends TelemetryClient {
    levelMap: Map<number, string>;
    constructor();
    trackPageView(path: string): void;
    trackEvent(name: string, properties?: {
        [k: string]: any;
    }): void;
    trackError(error: Error | string): void;
    trackLog(message: string, level: number, ...args: any[]): void;
}
