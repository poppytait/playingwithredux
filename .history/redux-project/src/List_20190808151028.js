import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return { articles: state.articles }
}

const ConnectedList = ({ articles }) => (
    <>
    {articles.map(article =>  <li key={article.id}>{article.title}</li>)}
    </>
)

const List = connect (mapStateToProps) (ConnectedList);

export default List;