// import axios from 'axios';
// import { fetchDataRequest, fetchDataSuccess, fetchDataError } from '../action/action';

// export const listproduct = () => async (dispath) => {
//   // try {
//   //   dispath(fetchDataRequest());
//   const data = await
//     axios("http://localhost/dataWP/graphql/", {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       data: JSON.stringify({
//         query: `
//             {
//                 products {
//                   nodes {
//                     id
//                     name
//                     image {
//                       sourceUrl
//                     }
//                     description(format: RAW)
//                     ... on SimpleProduct {
//                         salePrice(format: RAW)
//                         onSale
//                         regularPrice(format: RAW)
//                       }
//                   }
//                 }
//               }
//             `})
//     })
//       .then((response) => {
//         // dispath(fetchDataSuccess(response.data.data.products.nodes));

//       })
//       .then((response) => console.log(response.data));
//   // console.log(data);
//   return data;
//   // } catch (error) {
//   //   dispath(fetchDataError(error));

// }
// // }

import axios from 'axios';

let API_URL = 'http://localhost/dataWP/graphql/';
export default function callApi() {
  return axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({
      query: `
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
                    `})
  }).catch(err => {
    console.log(err);
  });
}