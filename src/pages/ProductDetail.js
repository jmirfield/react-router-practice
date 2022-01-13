import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams()
    return (
        <section>
            <h1>{`Product details for id: ${params.productId}`}</h1>
        </section>
    )
}

export default ProductDetail
