import React from 'react'

export const AgentCard = ({ name = "AGENT NAME", phone = "000 000 000" }) => (
  <div className="flex gap-8">
    <div className="bg-gray-200 h-50 w-50"></div>
    <div>
      <p className="pb-5">{name}</p>
      <p>{phone}</p>
    </div>
  </div>
);
