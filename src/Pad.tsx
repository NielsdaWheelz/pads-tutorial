export default function Pad(props: {id: number, color: string, on: boolean, toggle: (id: number) => void}) {
    return (
        <button className={props.on ? "on" : undefined} style={{backgroundColor: props.color}} onClick={() => props.toggle(props.id)}>
        </button>
    )
}