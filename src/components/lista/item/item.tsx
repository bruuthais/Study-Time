import { itemTarefa } from "../../../types/tarefa";

interface Props extends itemTarefa {

    selecionaTarefa: (tarefaSelecionada: itemTarefa) => void

}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    return (
        <li className={`${selecionado ? "selectedItem item" : "item"} ${completado ? "finishedItem" : ""}`}
            onClick={() => selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className="completed"></span>}
        </li>

    )

}