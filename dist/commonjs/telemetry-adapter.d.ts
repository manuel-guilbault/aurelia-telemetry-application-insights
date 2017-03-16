import { TelemetryClient } from 'aurelia-telemetry';
export declare class TelemetryAdapter extends TelemetryClient {
    private static createDefaultLevelMap();
    levelMap: Map<number, string>;
    trackPageView(path: string): void;
    trackEvent(name: string, properties?: {
        [k: string]: any;
    }): void;
    trackError(error: Error | string): void;
    trackLog(message: string, level: number, ...args: any[]): void;
}
