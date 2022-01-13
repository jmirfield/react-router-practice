import React, { useContext } from 'react'
import QuoteContext from '../context/QuoteContext'
import QuoteList from '../components/quotes/QuoteList'

const Quotes = () => {
    const {quotes} = useContext(QuoteContext)
    return (
        <div>
            <QuoteList quotes={quotes} />
        </div>
    )
}

export default Quotes
