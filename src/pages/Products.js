import { Link } from 'react-router-dom'

const Products = (props) => {
    return (
        <section>
            <h1>Products</h1>
            <ul>
                <li><Link to='/products/p1'>Apple</Link></li>
                <li><Link to='/products/p2'>Bannana</Link></li>
                <li><Link to='/products/p3'>Kiwi</Link></li>
            </ul>
        </section>
    )
}

export default Products
