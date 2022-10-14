import { useEffect, useState } from 'react';


const API_MEN = `{
  productCategories  {
    nodes {
      id
      name
      image{
        sourceUrl
      }
      products {
        nodes {
          id
          name
          description(format: RAW)
          featured
          image {
            sourceUrl
          }
          ... on SimpleProduct {
            id
            regularPrice(format: RAW)
            onSale
            salePrice(format: RAW)
          }
          reviews {
            averageRating
          }
        }
      }
    }
  }
}
`


function Api3() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('http://localhost/dataWP/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: API_MEN })
    }).then((response) => response.json())
      .then((launches) => setLaunches(launches.data.productCategories.nodes))
  }, []);
  console.log(launches);
  return launches;
}

export default Api3;