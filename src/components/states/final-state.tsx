import { InvitationCard } from '../invitation-card'
import { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import type { Vibe } from '../../types/vibe'
import penguimImg from '../../assets/penguim.jpg'

interface FinalStateProps {
    date: string
    time: string
    selectedVibes: Vibe[]
    anotherPlace: string
}

export function FinalState({ date, time, selectedVibes, anotherPlace }: FinalStateProps) {
    const hasEmailSent = useRef(false)
    const emaiJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
    const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

    useEffect(() => {
        if (!hasEmailSent.current) {
            sendMail()
            hasEmailSent.current = true
        }
    }, [])

    function formattedDate(date: string) {
        return new Intl.DateTimeFormat('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date(date))
    }

    function sendMail() {
        emailjs.send(
            emaiJsServiceId,
            emailJsTemplateId,
            {
                date,
                time, 
                vibes: selectedVibes.map(v => v.name).join(', '),
                anotherPlace
            },
            emailJsPublicKey
        )
    }

    return (
        <>
            <img src={ penguimImg } alt="please" className="w-40" />
            <InvitationCard>
                <h1 className="text-xl font-semibold">TÔ CONTIGO GATINHA 🖤</h1>
                <span>Fica pronta que eu vou te buscar 🚗</span>
                <div className="w-full flex flex-col gap-2">
                    <span>🗓️ { formattedDate(date) }</span>
                    <span>⏰ { time }</span>
                    <span>
                        🌟
                        {
                            selectedVibes.map((vibe, i) => {
                                return (
                                    vibe.name != 'OUTRA' && (
                                        <span key={ i }>{ i != 0 && ', ' }{ vibe.emoji } { vibe.name }</span>
                                    )
                                )
                            })
                        }
                        { anotherPlace.length > 0 && <span>, ❔ '{ anotherPlace }'</span> }
                    </span>
                </div>
            </InvitationCard>
        </>
    )
}
