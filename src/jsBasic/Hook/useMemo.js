import React, { useMemo, useState } from 'react';


function UseMemo(props) {
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [products, setProducts] = useState([])

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setPrice('')
        setName('')
    }

    const Total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log("tinhs");
            return result + prod.price;
        }, 0)
        return result;
    }, [products])

    return (
        <div>
            <input
                value={name}
                placeholder='name'
                onChange={e => setName(e.target.value)}
            />

            <input
                value={price}
                placeholder='price'
                onChange={e => setPrice(e.target.value)}
            />
            <button
                onClick={handleSubmit}
            >
                Sub
            </button>

            <h1>Total:{Total}</h1>

            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>{product.name}-{product.price}</li>
                    ))
                }
            </ul>

        </div>
    );
}

export default UseMemo;