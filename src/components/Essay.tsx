import React from 'react';
import essayData from '../data/essay.json';
import './Essay.css';

interface EssayContent {
  type?: string;
  src?: string;
  alt?: string;
}

interface EssaySection {
  title: string;
  content: (string | EssayContent)[];
}

const Essay: React.FC = () => {
  const renderContent = (content: string | EssayContent, index: number) => {
    if (typeof content === 'string') {
      return <p key={index}>{content}</p>;
    } else if (content.type === 'image') {
      return (
        <div key={index} className="essay-image-container">
          <img 
            src={content.src} 
            alt={content.alt || 'Essay image'} 
            className="essay-image"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="essay-section">
      <div className="essay-container">
        {essayData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="essay-section-content">
            <h2 className="essay-section-title">{section.title}</h2>
            <div className="essay-text">
              {section.content.map((item, itemIndex) => 
                renderContent(item, itemIndex)
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essay;

