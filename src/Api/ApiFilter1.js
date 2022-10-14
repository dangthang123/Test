import React, { useEffect, useState } from 'react';
const API = `{
  productCategories(first:99 ) {
    nodes {
      id
      name
      products {
        nodes {
          id
          name
          image {
            sourceUrl
          }
        }
      }
    }
  }
}
`

function ApiFilter1() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('http://localhost/dataWP/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: API })
    }).then((response) => response.json())
      .then((launches) => setLaunches(launches.data.productCategories.nodes))
  }, []);
  return launches;
}

export default ApiFilter1;