import ResourcePage from './ResourcePage'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'points', label: 'Points' },
  { key: 'userId', label: 'User ID' },
]

function Leaderboard() {
  return <ResourcePage columns={columns} endpoint="leaderboard" eyebrow="Competition" title="Leaderboard" />
}

export default Leaderboard