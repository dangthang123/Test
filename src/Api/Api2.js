import React, { useEffect, useState } from 'react';

const API = `
{
    products {
      nodes {
        id
        name
        image {
          sourceUrl
        }
        description(format: RAW)
        ... on SimpleProduct {
            salePrice(format: RAW)
            onSale
            regularPrice(format: RAW)
          }
      }
    }
  }
`

function Api2() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('http://localhost/dataWP/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: API })
    }).then((response) => response.json())
      .then((data) => setLaunches(data.data.products.nodes))
  }, []);
  return launches;
}

export default Api2;