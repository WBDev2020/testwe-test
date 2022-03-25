import React from 'react'

export default function CharacterItem({character}) {
  return (
    <p style={{fontSize: 14}}>{character.name}</p>
  )
}
