import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    apiKeyAuth: "768c73d89899580e3471e4825f165a32",
    appKeyAuth: "238348ba19aec7d7cee10a1a709d47fe0ea88aba",
  },
});

const monitorsApiClient = new v1.MonitorsApi(configuration);

export const fetchAllMonitors = () => monitorsApiClient.listMonitors();

export const createMonitor = (
  monitorRequestData: v1.MonitorsApiCreateMonitorRequest
) => monitorsApiClient.createMonitor(monitorRequestData);
