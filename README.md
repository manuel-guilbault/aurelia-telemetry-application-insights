# aurelia-telemetry-application-insights

Gather telemetry data in an Aurelia application with Application Insights.

*This plugin is intended to be used with the [aurelia-telemetry](https://github.com/manuel-guilbault/aurelia-telemetry) plugin.*

## Configuration

```typescript
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-telemetry')
    .plugin('aurelia-telemetry-application-insights', { instrumentationKey: '<YOUR_KEY>' });

  aurelia.start().then(() => aurelia.setRoot());
}
```

The plugin expects a configuration object, which is then passed to the
`AppInsights`' `downloadAndSetup` method.
