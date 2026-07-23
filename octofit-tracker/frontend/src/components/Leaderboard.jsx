import ResourcePage from './ResourcePage'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'points', label: 'Points' },
  { key: 'userId', label: 'User ID' },
]

function Leaderboard() {
  return <ResourcePage columns={columns} endpoint={leaderboardEndpoint} eyebrow="Competition" title="Leaderboard" />
}

export default Leaderboard