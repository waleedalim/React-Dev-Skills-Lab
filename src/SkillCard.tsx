interface SkillCard {
    name: string;
    level: number;
}

function SkillCard({ name, level }: SkillCard) {
    return (
        <div className="skill-card">
            <span className="skill_name">{name} - </span>
            <span className="skill_level">LEVEL {level}</span>
        </div>
    );
}

export default SkillCard;