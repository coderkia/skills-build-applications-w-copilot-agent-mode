const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export const apiEnvironmentMessage = codespaceName
  ? `Using Codespaces API ${apiBaseUrl}`
  : 'VITE_CODESPACE_NAME is not set; using local API http://localhost:8000/api'

export function getApiEndpoint(component) {
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/${component}/`
    : `http://localhost:8000/api/${component}/`
}

const collectionKeys = ['results', 'items', 'data', 'docs']

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return []
  }

  const key = collectionKeys.find((collectionKey) => Array.isArray(payload[collectionKey]))
  return key ? payload[key] : []
}

export async function fetchCollection(endpointUrl) {
  const response = await fetch(endpointUrl)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return normalizeCollection(await response.json())
}