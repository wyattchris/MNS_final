import React from 'react';
import './ProjectContext.css';

const ProjectContext: React.FC = () => {
  return (
    <div className="project-context-section">
      <div className="section-divider">
        <h2>About This Project</h2>
      </div>
      <div className="project-context-container">
        <div className="project-context-content">
          <p>
            In taking Music, Noise, Silence this semester, we learned to consider listening as an active cultural practice and to listen more intentionally in our everyday lives. Additionally, by conducting soundwalks, we built a heightened awareness of our sonic environment, the environmental, political, and cultural systems that influence soundscapes, and the ways noise and silence reflect power. Through our readings, guest lectures, listening exercises, and engagements with music and sound art, we engaged in many discussions throughout the semester. Naturally, many of our discussion questions catered to our own listening as Northeastern University students and led us each individually to an interest in research on soundscapes of different communities within Boston.
          </p>
          
          <p>
            Through moving to the Highland Park neighborhood this year and completing soundwalks early in the semester, Chris was inspired to pursue an interactive soundwalk for the final project; as a guiding question, the interactive soundwalk experience aims to explore how the sonic topography of the Highland Park neighborhood reflect patterns of social and infrastructural inequality, and explores how sound mapping can serve as both a creative practice and a method for understanding the politics of noise and silence in urban settings.
          </p>
          
          <p>
            During a soundwalk, Bella noticed the noises of construction and the buzzing college population. Reflecting on how these changes affect the elderly community that has been here to experience the city's growth, she was inspired to investigate how sound has changed in Boston and address its impacts on the older population through oral history and interviews.
          </p>
          
          <p>
            After noticing how intrusive the weekly lawn mowing outside her dorm was—and how easily she had tuned it out—Naomi was inspired to investigate how students experience campus noise through research on the impact of noise pollution and qualitative surveys with students. She ultimately created a sound collage that raises awareness of Northeastern's often-ignored acoustic environment, its health impacts, and the need for actionable change.
          </p>
          
          <p className="project-context-question">
            Combined, these projects pose the question: <em>What stories of power, change, and belonging emerge when we listen intentionally to Boston's diverse soundscapes?</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectContext;

