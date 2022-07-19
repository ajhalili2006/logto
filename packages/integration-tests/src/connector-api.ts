import { authedAdminApi } from '@/api';

export const listConnectors = async () => authedAdminApi.get('connectors');

export const getConnectorDetails = async (connectorId: string) =>
  authedAdminApi.get(`connectors/${connectorId}`);

export const updateConnectorConfig = async (connectorId: string, config: Record<string, unknown>) =>
  authedAdminApi.patch({
    url: `connectors/${connectorId}`,
    json: { config },
    headers: {
      'development-user-id': 'integration-test-admin-user',
    },
  });

export const enableConnector = async (connectorId: string) =>
  authedAdminApi.patch({
    url: `connectors/${connectorId}/enabled`,
    json: { enabled: true },
    headers: {
      'development-user-id': 'integration-test-admin-user',
    },
  });

export const deleteConnector = async (connectorId: string) =>
  authedAdminApi.patch({
    url: `connectors/${connectorId}/enabled`,
    json: { enabled: false },
  });

export const sendSmsTestMessage = async (
  connectorId: string,
  phone: string,
  config: Record<string, unknown>
) =>
  authedAdminApi.post({
    url: `connectors/${connectorId}/test`,
    json: { phone, config },
  });

export const sendEmailTestMessage = async (
  connectorId: string,
  email: string,
  config: Record<string, unknown>
) =>
  authedAdminApi.post({
    url: `connectors/${connectorId}/test`,
    json: { email, config },
  });
