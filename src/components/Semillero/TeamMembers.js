import React from 'react'

const TeamMembers = ({members}) => {
  return (
    <div className="team-members row">
      {members.map( (item, index) => (
        <Member key={index} member={item} />
      ))}
    </div>
  )
} 

const Member = ({ member }) => (
  <div className="member column">
    <img src={member.avatar} alt="avatar" />
    <p className="member-name">{member.name}</p>
    <p className="member-detail">{member.detail}</p>
    <p className="member-detail">{member.mail}</p>
  </div>
)

export default TeamMembers