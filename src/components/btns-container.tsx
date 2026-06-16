import type { ReactNode } from 'react'

interface BtnsContainerProps {
    children: ReactNode
}

export function BtnsContainer({ children }: BtnsContainerProps) {
    return (
        <div className="w-full relative flex items-center justify-between gap-4">
            { children }
        </div>
    )
}
