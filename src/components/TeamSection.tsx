
import React from 'react';

interface TeamMemberProps {
  name: string;
  imgUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, imgUrl }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white shadow-lg animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <img 
          src={imgUrl} 
          alt={`${name}'s portrait`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-medium text-white animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
        {name}
      </h3>
    </div>
  );
};

const TeamSection = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Anirudh Sivakumar",
      imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Valentina Maltese",
      imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      name: "Mansi More",
      imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    }
  ];

  return (
    <section className="peach-gradient py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-16 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          Core Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index} 
              name={member.name} 
              imgUrl={member.imgUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
