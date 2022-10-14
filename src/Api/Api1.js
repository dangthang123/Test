import { useEffect, useState } from 'react';

const LAUNCHES_QUERY = `
{
    rabbits {
      nodes {
        id
        productName
        img {
          sourceUrl
        }
      }
    }
  }
`
function Api() {
    // const contentWidth = useWindowDimensions().width
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('http://localhost/dataWP/graphql/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: LAUNCHES_QUERY })
        }).then((response) => response.json())
            .then((data) => setLaunches(data.data.rabbits.nodes))
        // .then((data) => setLaunches(data.data.posts.nodes))
    }, []);
    return launches;
    // return (

    //     <div className="App">
    //         <h1>Spacex Launches</h1>
    //         <ul>

    //             {/* {JSON.stringify(launches, null, 2)} */}
    //             {launches.map((laun) => (

    //                 <li key={laun.id}>
    //                     <h4>{laun.productName}</h4>
    //                     <img src={laun.img.sourceUrl} alt=""></img>
    //                 </li>

    //             ))}

    //         </ul>
    //     </div>
    // );
}
export default Api;

