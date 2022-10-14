import { useEffect, useState } from 'react';


const API_MEN = ` {
  menuItems {
    nodes {
      url
      label
      id
      path
      uri
    }
  }
}
`


function Apimenu() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('http://localhost/dataWP/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: API_MEN })
    }).then((response) => response.json())
      .then((launches) => setLaunches(launches.data.menuItems.nodes))
  }, []);
  return launches;
}

export default Apimenu;