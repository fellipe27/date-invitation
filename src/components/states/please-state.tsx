import { useState } from 'react'
import { type InvitationState, InvitationStates } from '../../types/invitation-state'
import { InvitationCard } from '../invitation-card'
import { BtnsContainer } from '../btns-container'
import pleaseImg from '../../assets/please.webp'

interface PleaseStateProps {
    setInvitationState: (invitationState: InvitationState) => void
}

interface BtnPosProps {
    x: number
    y: number
}

export function PleaseState({ setInvitationState }: PleaseStateProps) {
    const [noBtnPos, setNoBtnPos] = useState<BtnPosProps>({ x: 180, y: 0 })
    const [hasMoved, setHasMoved] = useState<boolean>(false)

    function moveNoButton() {
        const maxX = 300
        const maxY = 200
        const randomX = Math.random() * maxX
        const randomY = Math.random() * maxY

        setNoBtnPos({ x: randomX, y: randomY })
        setHasMoved(true)
    }

    return (
        <>
            <img src={ pleaseImg } alt="please" className="w-40" />
            <InvitationCard>
                <span>VOCÊ ACEITARIA IR Á UM DATE COMIGO?</span>
                <BtnsContainer>
                    <button onClick={ () => setInvitationState(InvitationStates.ROMANTIC) } className="w-1/2 cursor-pointer rounded-3xl py-2 bg-red-800">SIM</button>
                    <button onClick={ moveNoButton } style={ hasMoved ? { position: 'absolute', left: noBtnPos.x, top: noBtnPos.y } : {} } className="w-1/2 cursor-pointer rounded-3xl py-2 bg-red-800">NÃO</button>
                </BtnsContainer>
            </InvitationCard>
        </>
    )
}
