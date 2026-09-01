import { useState } from 'react'
import SkillCard from './SkillCard';
import SkillForm from './SkillForm';
import './App.css'


interface Skill {
  name: string;
  level: number;
}

function App() {
  const [skill_name, setSkill] = useState<Skill[]>([
    {name: "Python ", level: 9},
    {name: "React ", level: 8},
    {name: "C++ ", level: 5},
    {name: "COBAL ", level: 10},
  ]);

  function handleAddSkill(name: string, level: number) {
    setSkill([...skill_name, { name, level }]);
  }

  return (
      <main className="main">
        <h1>React Development Skills Showcase</h1>

        <div className="skill-list">
          {skill_name.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>

        <SkillForm onAddSkill={handleAddSkill} />
      </main>
  );
}

export default App;