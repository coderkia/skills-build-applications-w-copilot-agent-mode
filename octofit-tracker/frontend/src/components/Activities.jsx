import ResourcePage from './ResourcePage'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'completedAt', label: 'Completed' },
  { key: 'userId', label: 'User ID' },
]

function Activities() {
  return <ResourcePage columns={columns} endpoint={activitiesEndpoint} eyebrow="Activity logging" title="Activities" />
}

export default Activities