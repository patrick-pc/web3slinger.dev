import { SkillData } from '../data/skills'

const SkillCard = ({ skill }) => {
  return (
    <div className="px-3 py-6 border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800 transition">
      {skill}
    </div>
  )
}

export const Skills = () => {
  return (
    <>
      {SkillData.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </>
  )
}
