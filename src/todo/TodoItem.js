import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import '../index.css'
import Context from "../context";


function TodoItem({item, id, onChange}) {
    const classes = [];
    const {removeTodo} = useContext(Context);

    if(item.completed) {
        classes.push('done')
    }


    const styles = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem',
            maxWidth: '500px'
        },
        input: {
            marginRight: '1rem'
        }

    }


    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input checked={item.completed} onChange={() => onChange(item.id)} style={styles.input} type="checkbox"/>
                <strong>{id + 1} </strong>
                {item.title}
            </span>
            <button onClick={removeTodo.bind(null, item.id)} className='rm' >&times;</button>
        </li>
    )
}


/*
TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

*/



export default TodoItem