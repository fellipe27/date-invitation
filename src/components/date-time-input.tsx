interface DateTimeInputProps {
    label: string
    inputType: 'date' | 'time'
    setDateTime: (dateTime: string) => void
}

export function DateTimeInput({ label, inputType, setDateTime }: DateTimeInputProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label>{ label }</label>
            <input onChange={ e => setDateTime(e.target.value) } type={ inputType } className="p-2 rounded-3xl outline-none text-black bg-white" />
        </div>
    )
}
