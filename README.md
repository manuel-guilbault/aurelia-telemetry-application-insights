# aurelia-telemetry-application-insights

Gather telemetry data in an Aurelia application with Application Insights.

*This plugin is an implementation of the `TelemetryClient` class from the
[aurelia-telemetry](https://github.com/manuel-guilbault/aurelia-telemetry) plugin
for Application Insights.*

## Configuration

```typescript
import {AppInsights} from 'applicationinsights-js';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-telemetry')
    .plugin('aurelia-telemetry-application-insights', () => {
      AppInsights.downloadAndSetup({ instrumentationKey: '<YOUR_KEY>' });
    });

  aurelia.start().then(() => aurelia.setRoot());
}
```
