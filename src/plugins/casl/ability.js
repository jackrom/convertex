// src/plugins/casl/ability.js
import { Ability } from '@casl/ability'

export const initialAbility = [
  { action: 'read', subject: 'Auth' },
]

function loadStoredAbilities() {
  if (typeof window === 'undefined') return null

  try {
    // intenta sessionStorage y luego localStorage
    const stored =
      sessionStorage.getItem('userAbilities') ||
      localStorage.getItem('userAbilities')

    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

const existingAbility = loadStoredAbilities()

export default new Ability(existingAbility || initialAbility)
