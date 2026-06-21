import React, { useState } from 'react';
import '../styles/Timeline.css';

const TimelineComponent = () => {
  const [activeEra, setActiveEra] = useState(null);

  const eras = [
    {
      id: 1,
      decade: "1920s",
      title: "Early Development",
      description: "Initial concept and prototyping phase",
      image: null,
      details: "Ettore Bugatti begins experimentation with compact, high-performance engines"
    },
    {
      id: 2,
      decade: "1930s",
      title: "Type 51 Era",
      description: "Birth of the legendary Type 51 racing car",
      image: null,
      details: "Introduction of the Type 51A with 2.0L engine and improved chassis"
    },
    {
      id: 3,
      decade: "1940s",
      title: "War & Transition",
      description: "WWII and post-war recovery",
      image: null,
      details: "Production halted during war; design knowledge preserved"
    },
    {
      id: 4,
      decade: "1950s-60s",
      title: "Legacy & Influence",
      description: "Lasting impact on racing design",
      image: null,
      details: "Type 51A becomes legendary reference point for future generations"
    }
  ];

  return (
    <div className="timeline-container">
      <h2>Design Evolution Timeline</h2>
      <div className="timeline">
        {eras.map(era => (
          <div
            key={era.id}
            className={`timeline-item ${activeEra === era.id ? 'active' : ''}`}
            onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
          >
            <div className="timeline-marker">{era.decade}</div>
            <div className="timeline-content">
              <h3>{era.title}</h3>
              <p>{era.description}</p>
              {activeEra === era.id && (
                <div className="timeline-details">{era.details}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
