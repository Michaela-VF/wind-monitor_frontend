// src/components/StatCard.jsx

// "props" is an object containing whatever you pass in when you use <StatCard ... />
// https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component

function StatCard({title, value}) {
    return (
        <div className="stat-card">
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    )
}

export default StatCard
