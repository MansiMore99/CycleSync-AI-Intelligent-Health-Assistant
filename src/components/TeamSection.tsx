
import React from 'react';

interface TeamMemberProps {
  name: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-white bg-opacity-40 border-2 border-white shadow-lg animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        {/* Empty placeholder circle */}
      </div>
      <h3 className="text-xl font-medium text-white animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        {name}
      </h3>
    </div>
  );
};

const TeamSection = () => {
  // Team members data
  const teamMembers = [
    { name: "Anirudh Sivakumar" },
    { name: "Valentina Maltese" },
    { name: "Mansi More" }
  ];

  return (
    <section className="peach-gradient py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-20 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          Core Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index} 
              name={member.name} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
