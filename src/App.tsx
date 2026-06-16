import { useState } from 'react'
import { InvitationStates, type InvitationState } from './types/invitation-state'
import type { Vibe } from './types/vibe'
import { FinalState } from './components/states/final-state'
import { VibeState } from './components/states/vibe-state'
import { DateState } from './components/states/date-state'
import { RomanticState } from './components/states/romantic-state'
import { PleaseState } from './components/states/please-state'

export function App() {
  const [invitationState, setInvitationState] = useState<InvitationState>(InvitationStates.PLEASE)
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [selectedVibes, setSelectedVibes] = useState<Vibe[]>([])
  const [anotherPlace, setAnotherPlace] = useState<string>('')

  type GlobalData = {
    setInvitationState: (state: InvitationState) => void
    date: string
    setDate: (date: string) => void
    time: string
    setTime: (time: string) => void
    selectedVibes: Vibe[]
    setSelectedVibes: (vibes: Vibe[]) => void
    anotherPlace: string
    setAnotherPlace: (place: string) => void
  }

  const screens: Record<InvitationState, React.ComponentType<GlobalData>> = {
    please: PleaseState,
    romantic: RomanticState,
    date: DateState,
    vibe: VibeState,
    final: FinalState
  }
  const ScreenComponent = screens[invitationState]

  return (
    <main className="w-screen h-screen relative flex flex-col gap-4 items-center justify-center bg-white">
      <ScreenComponent 
        setInvitationState={ setInvitationState } 
        date={ date }
        setDate={ setDate }
        time={ time }
        setTime={ setTime }
        selectedVibes={ selectedVibes }
        setSelectedVibes={ setSelectedVibes }
        anotherPlace={ anotherPlace }
        setAnotherPlace={ setAnotherPlace }
      />
    </main>
  )  
}
