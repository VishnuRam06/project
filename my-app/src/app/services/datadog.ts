import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    apiKeyAuth: "94023f347d96a0d36d32c73902da1daa",
    appKeyAuth: "5bdf31b912f33f2744cd6b28f08174c4bf9d7563",
  },
});

const monitorsApiClient = new v1.MonitorsApi(configuration);

export const fetchAllMonitors = () => monitorsApiClient.listMonitors();

export const createMonitor = (
  monitorRequestData: v1.MonitorsApiCreateMonitorRequest
) => monitorsApiClient.createMonitor(monitorRequestData);
