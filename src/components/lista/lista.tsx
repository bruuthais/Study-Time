import { itemTarefa } from '../../types/tarefa'
import Item from './item/item'

interface Props {
    tarefas: itemTarefa[],
    selecionaTarefa: (tarefaSelecionada: itemTarefa) => void
}
function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className="taskList">
            <h2 >Estudos do dia:</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />

                ))}

            </ul>
        </aside>
    )
}

export default Lista