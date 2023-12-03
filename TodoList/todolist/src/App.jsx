import logo from './logo.svg';
import './App.css';
import { Button, Input } from './components/FormComponents/FormComponents';
import { useEffect, useState } from 'react';
import TableToDo from './components/TableToDo/TableToDo';

function App() {

  const [chore, setChore] = useState("");
  const [list, setList] = useState([{
    id: "",
    title: "",
    checked: false,
  }]);

  useEffect(() => {

    setList([])



  }, [])

  function AddChore(e) {
    e.preventDefault();

    try {

      setList([
        ...list,
        {
          id: crypto.randomUUID(),
          title: chore,
          checked: false
        }
      ])

      setChore("")

      console.log(list);

    } catch (error) {

    }
  }


  function RemoveChore(id) {

    const filteredList = list.filter( element => element.id !== id)

    setList(filteredList)

  }

  function ChoreDone(chore) {

    const index = list.findIndex(element => element.id === chore.id)

    const easyList = list;

    chore.checked = true;

    easyList.splice(index, 1 , chore)

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de afazeres</h1>
        <form onSubmit={AddChore} action="">

          <Input
            inputText={"Insira a tarefa aqui!"}
            inputType={"text"}
            inputValue={chore}
            required={"required"}
            setInputValue={(e) => {
              setChore(e.target.value)
            }} />

          <Button
            color={"green"}
            buttonText={"Adicionar tarefa"}
            buttonType={"submit"} />

        </form>



        <TableToDo
          list={list}
          removeFunction={RemoveChore}
          alterChecked={ChoreDone} />
      </header>
    </div>
  );
}

export default App;
