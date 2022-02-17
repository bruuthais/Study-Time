
interface Props {
    tempo: number | undefined;
}
export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos)
        .padStart(2, "0")
    const [segundoDezena, segundoUnidade] = String(segundos)
        .padStart(2, "0")
    return (
        <>
            <span className="timerNumber">{minutoDezena}</span>
            <span className="timerNumber">{minutoUnidade}</span>
            <span className="timerDiv">:</span>
            <span className="timerNumber">{segundoDezena}</span>
            <span className="timerNumber">{segundoUnidade}</span>
        </>
    )
}