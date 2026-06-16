import type { ReactNode } from 'react'

interface InvitationCardProps {
    children: ReactNode
}

export function InvitationCard({ children }: InvitationCardProps) {
    return (
        <div className="w-[90%] flex flex-col gap-4 items-center justify-center rounded-lg p-4 text-white bg-red-500">
            { children }
        </div>
    )
}
