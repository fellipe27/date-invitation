import { type InvitationState, InvitationStates } from '../../types/invitation-state'
import { InvitationCard } from '../invitation-card'
import { BtnsContainer } from '../btns-container'
import { DateTimeInput } from '../date-time-input'

interface DateStateProps {
    setInvitationState: (state: InvitationState) => void
    date: string
    setDate: (date: string) => void
    time: string
    setTime: (time: string) => void
}

export function DateState({ setInvitationState, date, setDate, time, setTime }: DateStateProps) {
    return (
        <InvitationCard>
            <h1 className="text-xl font-semibold">🗓️ QUANDO VOCÊ ESTÁ LIVRE?</h1>
            <DateTimeInput label="Escolha a data" inputType="date" setDateTime={ setDate } />
            <DateTimeInput label="Escolha o horário" inputType="time" setDateTime={ setTime } />
            <BtnsContainer>
                <button disabled={ !date || !time } onClick={ () => setInvitationState(InvitationStates.VIBE) } className="w-full cursor-pointer disabled:cursor-not-allowed rounded-3xl py-2 bg-red-800">SELECIONAR A DATA 🖤</button>
            </BtnsContainer>
        </InvitationCard>
    )
}
