import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
import QuoteContext from '../context/QuoteContext'

const NewQuote = () => {
    const {addQuoteHandler} = useContext(QuoteContext)
    const navigate = useNavigate()

    const onAddQuoteHandler = (quoteData) => {
        addQuoteHandler(quoteData)
        navigate('/quotes')
    }
    return (
        <QuoteForm onAddQuote={onAddQuoteHandler} />
    )
}

export default NewQuote
