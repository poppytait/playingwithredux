import React, { useState } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addArticle } from '../actions/index'

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

const ConnectedForm = (props) => {
    const [ title, setTitle ] = useState('');

    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const id = uuidv1();
        addArticle({ title, id});
        setTitle({title: ''})
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title</label>
            <input
                type="text"
                id="title-input"
                value={title}
                onChange={handleChange}
            />
            <button type="submit">
                SAVE
            </button>
        </form>
        </>
    )
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form;