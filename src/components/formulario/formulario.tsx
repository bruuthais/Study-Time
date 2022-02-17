import React from 'react'
import { itemTarefa } from '../../types/tarefa'
import Button from '../button'
import { nanoid } from 'nanoid';
class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<itemTarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: nanoid()

                }
            ]
        )
        this.setState({
            tarefa: "",
            tempo: "00:00",
        })
    }
    render() {


        return (
            <form className="newTask" onSubmit={this.adicionarTarefa.bind(this)}>

                <div className="inputContainer">
                    <label htmlFor="tarefa">Novo estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você deseja estudar?"
                        value={this.state.tarefa}
                        onChange={(evento) => this.setState({ ...this.state, tarefa: evento.target.value })}
                        required
                    />
                </div>
                <div className="inputContainer">
                    <label>Tempo</label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={(evento) => this.setState({ ...this.state, tempo: evento.target.value })}
                        required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }
}
export default Formulario