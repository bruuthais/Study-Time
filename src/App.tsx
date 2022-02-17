import React, { useState } from 'react';
import "./assets/styles/main.scss";
import Cronometro from './components/cronometro/cronometro';
import Formulario from './components/formulario/formulario';
import Lista from './components/lista/lista';
import { itemTarefa } from './types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<itemTarefa[]>([]);
  const [selecionado, setSelecionado] = useState<itemTarefa>()

  function selecionaTarefa(tarefaSelecionada: itemTarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false

    })));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas}
      />
      <Cronometro selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} />
      <Lista tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} />
    </div>
  );
}

export default App;
