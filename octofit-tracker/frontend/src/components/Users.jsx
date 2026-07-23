import ResourcePage from './ResourcePage'

const columns = [
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'profile', label: 'Profile' },
]

function Users() {
  return <ResourcePage columns={columns} endpoint="users" eyebrow="Profiles" title="Users" />
}

export default Users