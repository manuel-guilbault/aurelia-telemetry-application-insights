# aurelia-telemetry-application-insights
Gather telemetry data in an Aurelia application with Application Insights.

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

The plugin's `configure` function expects an object, which is then passed to the
`AppInsights`' `downloadAndSetup` method.
