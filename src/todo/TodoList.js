import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',

    }
}


function TodoList(props) {

    return (
        <div style={{display: 'flex', justifyContent: 'center', }}>
            <ul style={styles.ul}>
                {props.obj.map((item, id) => {
                    return <TodoItem key={id} item={item} id={id} onChange={props.onToggle}/>
                })}
            </ul>
        </div>

    )
}

/*
TodoList.propTypes = {
    obj: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
*/


export default TodoList





