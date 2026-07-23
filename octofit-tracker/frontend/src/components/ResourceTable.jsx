function formatValue(value) {
  if (Array.isArray(value)) {
    return value.length ? value.join(', ') : 'None'
  }

  if (value && typeof value === 'object') {
    if (value.displayName || value.bio) {
      return [value.displayName, value.bio].filter(Boolean).join(' - ')
    }

    return JSON.stringify(value)
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(value))
  }

  return value ?? 'None'
}

function ResourceTable({ columns, items }) {
  if (!items.length) {
    return <p className="empty-state">No records found.</p>
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle octofit-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id ?? item.id ?? `${columns[0].key}-${index}`}>
              {columns.map((column) => (
                <td key={column.key}>{formatValue(column.render ? column.render(item) : item[column.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResourceTable