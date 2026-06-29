// src/pages/DashboardPage.jsx
import { useState, useEffect } from 'react'
import { getDashboardMetrics } from '../services/api'

function DashboardPage() {
  // React Hook; special functions to "hook into" React's internal system
  // it useState holds our data. 
  // It starts as null (we have nothing yet).
  // When the fetch completes, we'll put the data here.
  const [metrics, setMetrics] = useState(null)

  // useState for loading — true while we're waiting for Rails to respond.
  const [loading, setLoading] = useState(true)

  // useState for errors — if something goes wrong, 
  // we store the message here.
  const [error, setError] = useState(null)

  // useEffect runs AFTER the component renders for the first time.
  // The empty array [] at the end means "only run once, on mount".
  // This is where side effects like fetching data belong.
  useEffect(() => {
    getDashboardMetrics()
      .then((data) => {
        setMetrics(data)   // store the data from Rails
        setLoading(false)  // we're done loading
      })
      .catch((err) => {
        setError(err.message)  // something went wrong
        setLoading(false)      // we're done loading (even if it failed)
      })
  }, [])

  // Render different things depending on state.
  // This is called "conditional rendering" in React.
  if (loading) return <p>Loading dashboard...</p>
  if (error)   return <p>Error: {error}</p>

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h2>Total Turbines</h2>
          <p>{metrics.turbine_count}</p>
        </div>
        <div className="stat-card">
          <h2>Total Readings</h2>
          <p>{metrics.reading_count}</p>
        </div>
        <div className="stat-card">
          <h2>Active Alerts</h2>
          <p>{metrics.active_alerts}</p>
        </div>
        <div className="stat-card">
          <h2>Resolved Alerts</h2>
          <p>{metrics.resolved_alerts}</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage