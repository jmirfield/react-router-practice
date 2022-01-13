import { Fragment, useContext } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import QuoteContext from '../context/QuoteContext'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const QuoteDetails = () => {
    const params = useParams()
    const { quotes } = useContext(QuoteContext)
    const quote = quotes[params.quoteId]

    if(!quote) {
        return <NoQuotesFound />
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Outlet />
        </Fragment>
    )
}

export default QuoteDetails
