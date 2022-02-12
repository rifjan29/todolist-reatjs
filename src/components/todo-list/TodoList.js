import './TodoList.css'

const TodoList = (props) => {
    // console.log(props.dataTodos);
    return(
        <ul>
            {
               props.dataTodos.map((todo) => {
                //    map = mengubah/memecah array Object berdasarkan key index 
                   return <li key={todo.id}>{todo.title}</li>
               })
                // props.dataTodos.forEach(todo => {
                //        return <li key={todo.id}>{todo.title}</li>
                // })
            }
        </ul>
    )
}

export default TodoList