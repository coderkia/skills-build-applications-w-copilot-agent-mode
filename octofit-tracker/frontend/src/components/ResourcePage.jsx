import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'
import ResourceTable from './ResourceTable'

function ResourcePage({ columns, endpoint, eyebrow, title }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadItems() {
      setStatus('loading')
      setError('')

      try {
        const nextItems = await fetchCollection(endpoint)

        if (!ignore) {
          setItems(nextItems)
          setStatus('ready')
        }
      } catch (requestError) {
        if (!ignore) {
          setError(requestError instanceof Error ? requestError.message : 'Unable to load records')
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      ignore = true
    }
  }, [endpoint])

  return (
    <section className="resource-panel" aria-busy={status === 'loading'}>
      <div className="resource-header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <span className="record-count">{items.length} records</span>
      </div>

      {status === 'loading' && <p className="status-message">Loading records...</p>}
      {status === 'error' && <p className="status-message error-message">{error}</p>}
      {status === 'ready' && <ResourceTable columns={columns} items={items} />}
    </section>
  )
}

export default ResourcePage