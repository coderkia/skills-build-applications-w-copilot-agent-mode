import ResourcePage from './ResourcePage'

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'completedAt', label: 'Completed' },
  { key: 'userId', label: 'User ID' },
]

function Activities() {
  return <ResourcePage columns={columns} endpoint="activities" eyebrow="Activity logging" title="Activities" />
}

export default Activities