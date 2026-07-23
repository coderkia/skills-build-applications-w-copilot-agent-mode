import ResourcePage from './ResourcePage'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'exercises', label: 'Exercises' },
]

function Workouts() {
  return <ResourcePage columns={columns} endpoint="workouts" eyebrow="Suggestions" title="Workouts" />
}

export default Workouts