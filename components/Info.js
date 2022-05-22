import { InfoData } from '../data/info'
import { FiExternalLink } from 'react-icons/fi'

const InfoCard = ({ title, href, description }) => {
  return (
    <div className="flex items-center justify-between mb-3 transition">
      <div className="text-gray-500">{title}</div>
      {href ? (
        <a
          className="flex items-center gap-2 text-indigo-800"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="font-medium">{description}</div>
          <FiExternalLink />
        </a>
      ) : (
        <div className="font-medium">{description}</div>
      )}
    </div>
  )
}

export const Info = () => {
  return (
    <div className="grid text-sm">
      {InfoData.map((info, index) => (
        <InfoCard key={index} {...info} />
      ))}
    </div>
  )
}
