// Require dependencies
const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');


// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  instrumentations: [getNodeAutoInstrumentations()]
});


// Telescope configuration
const traceProvider = new opentelemetry.NodeTracerProvider({
  resource: Resource(),
});

const collectorOptions = {
  url: 'https://production.cisco-udp.com/trace-collector',
  headers: {
    authorization: 'Bearer ${process.env.TELESCOPE_TOKEN}',
  },
};

const httpExporter = new opentelemetry.HTTPTraceExporter(collectorOptions);
traceProvider.addSpanProcessor(new BatchSpanProcessor(httpExporter));


// SDK Start
sdk.start()
