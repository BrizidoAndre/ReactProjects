import React from "react";

const TableToDo = ({ list, removeFunction, alterChecked }) => {


    return (
        <>

            <table>

                <thead>
                    <tr>
                        <th>Feito</th>
                        <th>Nome da tarefa</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>

                    {/* Conteúdo da lista em si */}
                    {list.map(e => {
                        return (
                            <tr key={e.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="feito"
                                        id="feito"
                                        value={e.checked}
                                        onClick={() => {
                                            alterChecked(e)
                                        }}
                                    /></td>
                                <td >{e.title}</td>
                                <td onClick={() => {
                                    removeFunction(e.id)
                                }}>X</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default TableToDo;