import React, { useState } from 'react'

const QuoteContext = React.createContext([])

const DUMMY_QUOTES = [
    { author: 'Justin', text: 'Test quote' },
    { author: 'Justin', text: 'Test quote2' },
    { author: 'Justin', text: 'Test quote3' },
    { author: 'Justin', text: 'Practice react app with routes' },
    { author: 'Justin', text: 'Hello world' }
]


export const QuoteProvider = ({ children }) => {
    const [quotes, setQuotes] = useState(DUMMY_QUOTES)

    const addQuoteHandler = (newQuote) => {
        setQuotes((prevQuotes) => {
            return [...prevQuotes, newQuote]
        })
    }

    const sortQuotesAscHandler = () => {
        setQuotes((prevQuotes) => {
            const reorderedArray = []
            console.log(prevQuotes.forEach)
            return prevQuotes
        })
    }

    return (
        <QuoteContext.Provider value={{
            quotes,
            addQuoteHandler,
            sortQuotesAscHandler
        }}>
            {children}
        </QuoteContext.Provider>
    )
}

export default QuoteContext
