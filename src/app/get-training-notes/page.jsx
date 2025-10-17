"use client"; // Enable client-side fetching
import trainingData from '../components/Trainings.json';
import { useEffect, useState } from "react";

export default function TrainingPage() {
  


  return (
    <main className="training-container">
      <h1 className="training-title" style={{color:'white'}}>Disaster Management Training</h1>

      {trainingData.map((topic, idx) => (
        <section key={idx} className="topic-section">
          <h2 className="topic-title">{topic.topic}</h2>

          {topic.subtopics.map((subtopic, sidx) => (
            <div key={sidx} className="subtopic-card">
              <h3 className="subtopic-title">{subtopic.title}</h3>
              <p className="subtopic-content">{subtopic.content}</p>

              <div className="key-points">
                <h4>Key Points:</h4>
                <ul>
                  {subtopic.key_points.map((point, pidx) => (
                    <li key={pidx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="precautions">
                <h4>Precautions:</h4>
                <ul>
                  {subtopic.precautions.map((precaution, preidx) => (
                    <li key={preidx}>{precaution}</li>
                  ))}
                </ul>
              </div>

              <p className="subtopic-points">Points: {subtopic.points}</p>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
