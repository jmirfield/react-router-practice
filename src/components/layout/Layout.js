import { Fragment } from 'react'
import MainNavigation from './MainNavigation'
import classes from './Layout.module.css'
import { QuoteProvider } from '../../context/QuoteContext'

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <QuoteProvider>
                <main className={classes.main}>
                    {props.children}
                </main>
            </QuoteProvider>
        </Fragment>
    )
}

export default Layout
