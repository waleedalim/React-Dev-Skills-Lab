import { useState } from 'react';

interface SkillForm {
    onAddSkill: (name: string, level: number) => void;
}

function SkillForm({ onAddSkill }: SkillForm) {
    const [skillName, setSkillName] = useState('');
    const [level, setLevel] = useState(1);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!skillName.trim()) return;

        onAddSkill(skillName, level);
        setSkillName('');
        setLevel(1);
    }

    return (
        <form className="skill_form" onSubmit={handleSubmit}>
            <label className="skill-form_row">
                <span className="skill-form_label">Enter your skill here: </span>
                <input
                    type="text"
                    value={skillName}
                    onChange={(event) => setSkillName(event.target.value)}
                />
            </label>

            <label className="skill-form_row">
                <span className="skill-form_label">      Level</span>
                <select
                    value={level}
                    onChange={(event) => setLevel(Number(event.target.value))}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    
                </select>
            </label>

            <button type="submit">  Submit to add skill now</button>
        </form>
    );
}

export default SkillForm;