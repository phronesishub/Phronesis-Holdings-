import React, { useState, useEffect } from 'react';
import './StatsSection.css'; // Make sure to create a CSS file with this name

const Stat = ({ icon, label, end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // First calculate how many times the number should increment based on the duration and end value
    const incrementTime = (duration / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="stat">
      <img src={icon} alt={label} className="icon" />
      <div className="number">{count.toLocaleString()}+</div>
      <div className="label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  // You would replace these with the actual icon paths and desired numbers
  const stats = [
    {
      icon: 'path-to-your-user-icon.png',
      label: 'Active EcosMining Users',
      end: 90621,
      duration: 2,
    },
    // ... other stats
  ];

  return (
    <div className="stats-section">
      {stats.map((stat, index) => (
        <Stat
          key={index}
          icon={stat.icon}
          label={stat.label}
          end={stat.end}
          duration={stat.duration}
        />
      ))}
    </div>
  );
};

export default StatsSection;
