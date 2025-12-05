import React from 'react';
import './WorksCited.css';
import { worksCited } from '../data/worksCited';

const WorksCited: React.FC = () => {
  return (
    <div className="works-cited-section">
      <div className="section-divider">
        <h2>Works Cited</h2>
      </div>
      <div className="works-cited-container">
        {worksCited.map((section, sectionIndex) => (
          <div key={sectionIndex} className="author-section">
            <h3 className="author-name">{section.author}</h3>
            <ol className="citations-list">
              {section.citations.map((citation, citationIndex) => (
                <li key={citationIndex} className="citation-item">
                  <span className="citation-text">{citation.text}</span>
                  {citation.url && (
                    <a 
                      href={citation.url.startsWith('http') ? citation.url : `https://${citation.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="citation-link"
                    >
                      {citation.url}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksCited;

