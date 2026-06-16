import { InvitationStates, type InvitationState } from '../../types/invitation-state'
import type { Vibe } from '../../types/vibe'
import { BtnsContainer } from '../btns-container'
import { InvitationCard } from '../invitation-card'

interface VibeStateProps {
    setInvitationState: (state: InvitationState) => void
    selectedVibes: Vibe[]
    setSelectedVibes: (vibes: Vibe[]) => void
    setAnotherPlace: (place: string) => void
}

export function VibeState({ setInvitationState, selectedVibes, setSelectedVibes, setAnotherPlace }: VibeStateProps) {
    const vibes: Vibe[] = [
        { emoji: '📽️', name: 'CINEMA' },
        { emoji: '🍻', name: 'BARZINHO' },
        { emoji: '🎡', name: 'PARQUE' },
        { emoji: '🍝', name: 'RESTAURANTE' },
        { emoji: '☕', name: 'CAFÉ' },
        { emoji: '🎳', name: 'BOLICHE' },
        { emoji: '🍣', name: 'SUSHI' },
        { emoji: '❔', name: 'OUTRA' }
    ]

    function changeSelectedVibes(vibe: Vibe) {
        const isVibeSelected = selectedVibes.some(v => v.name == vibe.name)

        setSelectedVibes(
            isVibeSelected ?
            selectedVibes.filter(v => v.name != vibe.name)
            : [...selectedVibes, vibe]
        )
    }

    function isVibeSelected(vibe: Vibe) {
        return selectedVibes.some(v => v.name == vibe.name)
    }

    return (
        <InvitationCard>
            <h1 className="text-xl font-semibold">QUAL É A VIBE? 🌟</h1>
            <span>O que você tá afim? (pode ser mais de um)</span>
            <div className="w-full flex flex-wrap items-center justify-center gap-2">
                {
                    vibes.map((vibe) => (
                        <div key={ vibe.name } onClick={ () => changeSelectedVibes(vibe) } className={ `${isVibeSelected(vibe) && 'bg-red-800'} w-24 h-24 cursor-pointer flex flex-col items-center justify-center rounded border border-white` }>
                            <span className="text-xl">{ vibe.emoji }</span>
                            <span className="text-xs">{ vibe.name }</span>
                        </div>
                    ))
                }
            </div>
            {   
                selectedVibes.some(s => s.name == 'OUTRA') && (
                    <input onChange={ e => setAnotherPlace(e.target.value) } placeholder="Outro lugar (pode ser até 'Te vira po kk')" type="text" className="w-full p-2 rounded-3xl outline-none text-black bg-white" />
                )
            }
            <BtnsContainer>
                <button disabled={ selectedVibes.length == 0 } onClick={ () => setInvitationState(InvitationStates.FINAL) } className="w-full cursor-pointer rounded-3xl py-2 disabled:cursor-not-allowed bg-red-800">
                    { selectedVibes.length == 0 ? 'ESCOLHE PRIMEIRO ☝️' : 'BORA! 🖤' }
                </button>
            </BtnsContainer>
        </InvitationCard>
    )
}
