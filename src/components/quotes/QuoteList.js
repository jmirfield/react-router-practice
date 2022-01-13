import { Fragment, useContext } from 'react';
import QuoteContext from '../../context/QuoteContext';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const { sortQuotesAscHandler } = useContext(QuoteContext)
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortQuotesAscHandler}>Sort Ascending</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote, idx) => (
          <QuoteItem
            key={idx}
            id={idx}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
