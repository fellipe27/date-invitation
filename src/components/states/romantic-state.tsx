import { type InvitationState, InvitationStates } from '../../types/invitation-state'
import { BtnsContainer } from '../btns-container'
import { InvitationCard } from '../invitation-card'
import romanticImg from '../../assets/romantic.jpg'

interface RomanticStateProps {
    setInvitationState: (state: InvitationState) => void
}

export function RomanticState({ setInvitationState }: RomanticStateProps) {
    return (
        <>
            <img src={ romanticImg } alt="romantic" className="w-40" />
            <InvitationCard>
                <h1 className="text-xl font-semibold">VOCÊ DISSE SIM? 🥹</h1>
                <span>Eu estava esperando você dizer não kkkk</span>
                <BtnsContainer>
                    <button onClick={ () => setInvitationState(InvitationStates.DATE) } className="w-full cursor-pointer rounded-3xl py-2 bg-red-800">PRÓXIMO 🖤</button>
                </BtnsContainer>
            </InvitationCard>
        </>
    )
}
