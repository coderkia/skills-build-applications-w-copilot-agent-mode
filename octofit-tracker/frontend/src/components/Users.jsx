import ResourcePage from './ResourcePage'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

const columns = [
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'profile', label: 'Profile' },
]

function Users() {
  return <ResourcePage columns={columns} endpoint={usersEndpoint} eyebrow="Profiles" title="Users" />
}

export default Users