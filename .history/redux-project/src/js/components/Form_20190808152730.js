import react, { useState } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addArticle } from '../actions/index'

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

const ConnectedForm = () => {
    const [ title, setTitle ] = useState('');
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
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