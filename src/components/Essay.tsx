import React from 'react';
import essayData from '../data/essay.json';
import './Essay.css';

interface EssayLink {
  type: 'link';
  text: string;
  url: string;
}

interface EssayImage {
  type: 'image';
  src: string;
  alt?: string;
}

interface EssayParagraph {
  type: 'paragraph';
  segments: (string | EssayLink)[];
}

type EssayContent = string | EssayImage | EssayParagraph;

interface EssaySection {
  title: string;
  content: EssayContent[];
}

const Essay: React.FC = () => {
  const renderParagraph = (paragraph: EssayParagraph, index: number) => {
    return (
      <p key={index}>
        {paragraph.segments.map((segment, segIndex) => {
          if (typeof segment === 'string') {
            return <span key={segIndex}>{segment}</span>;
          } else if (segment.type === 'link') {
            return (
              <a
                key={segIndex}
                href={segment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="essay-link"
              >
                {segment.text}
              </a>
            );
          }
          return null;
        })}
      </p>
    );
  };

  const renderContent = (content: any, index: number) => {
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
    } else if (content.type === 'paragraph') {
      return renderParagraph(content as EssayParagraph, index);
    }
    return null;
  };

  return (
    <div className="essay-section">
      <div className="section-divider">
        <h2>Naomi Zhang: Campus Noise Pollution</h2>
      </div>
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

