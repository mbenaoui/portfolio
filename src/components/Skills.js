import React, { useState } from 'react';
import TrackVisibility from 'react-on-screen';

const skillsData = [
  {
    category: 'Backend Skill',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'NestJS', level: 100 },
      { name: 'Django', level: 75 },
      { name: 'RESTful API Development', level: 100 },
    ],
  },
  {
    category: 'Frontend Skill',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 100 },
      { name: 'Angular', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'CSS Tailwind', level: 90 },
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript', level: 95 },
    ],
  },
  {
    category: 'Mobile Skill',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'React Native', level: 100 },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className='w-full flex h-auto justify-center items-center'>
            <div className="flex flex-wrap justify-center w-[90%] max-w-[1200px] rounded-xl bg-gray-900 text-gray-200 py-10">
              {skillsData.map((category, index) => (
                <div key={index} className="w-full md:w-1/3 px-6 mb-8">
                  <h3 className="text-xl text-[#4A2FBD] font-bold mb-4">{category.category}</h3>
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-lg h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-[#8b75ec] to-[#4A2FBD] rounded-lg transition-all ease-out duration-[2500ms]`}
                          style={{
                            width: isVisible  ? `${skill.level}%` : '0%',
                            transitionDelay: `${idx * 200}ms`, // Staggered effect
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};
