import { useEffect, useState } from 'react';

const API_POST = `
{
  categories {
    nodes {
      id
      name
      slug
      posts {
        nodes {
          id
          slug
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
  `

function ApiCat() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('http://localhost/dataWP/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: API_POST })
    }).then((response) => response.json())
      .then((launches) => setLaunches(launches.data.categories.nodes))
  }, []);
  return launches;
}


export default ApiCat;