
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/data";
import { itemTarefa } from "../../types/tarefa";
import Button from "../button";
import Relogio from "./relogio/relogio";

interface Props {
    selecionado: itemTarefa | undefined;
    finalizarTarefa: () => void
}
export default function Cronometro({ selecionado, finalizarTarefa }: Props) {

    const [tempo, setTempo] = useState<number>()
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))

        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }

            finalizarTarefa()
        }, 1000)
    }



    return (
        <div className="timer">
            <p className="title">Escolha um card e inicie o Cronômetro</p>

            <div className="timerWrapper">
                <Relogio tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)}>

                Estudar!
            </Button>
        </div>
    )
}