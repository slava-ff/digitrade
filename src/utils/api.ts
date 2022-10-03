import axios from 'axios'

const { REACT_APP_API_URL } = process.env
export const API_URL = `https://${REACT_APP_API_URL}`

export type FetchParams = {
  body?: string
  headers?: {}
  method?: string
}

const client = axios.create()

export const fetchApi = (url: string, params: FetchParams = {}) =>
  client.get(`${API_URL}/${url}`, { params }).then((res) => res.data)

const defaultFetch = (url: string) =>
  axios.get(`${API_URL}/${url}`).then((res) => res.data)

export default defaultFetch

// TO-DO: maybe this:

// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
// import axios, { Method } from "axios";

// const useFetch = (
//   url: string,
//   method: Method,
//   body: any
// ): [boolean, string | null, any] => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [data, setData] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     const fetchData = async () => {
//       try {
//         const response = await axios({
//           url: url,
//           method: method,
//           data: body,
//         });
//         const data = response?.data;
//         setData(data);
//       } catch (error: any) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData().then((r) => r);
//   }, [url]);

//   return [loading, error, data];
// };

// export { useFetch };
