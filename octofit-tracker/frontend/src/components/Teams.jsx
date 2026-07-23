import ResourcePage from './ResourcePage'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Description' },
  { key: 'members', label: 'Members' },
]

function Teams() {
  return <ResourcePage columns={columns} endpoint="teams" eyebrow="Team management" title="Teams" />
}

export default Teams