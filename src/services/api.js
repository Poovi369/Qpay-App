import axios from "axios";

const API_BASE = "https://dev.expressfintech.in";
// const API_BASE = 'http://64.227.189.27/wallet/api/v1';

// export const fetchTransactionHistory = async ({ service_id, token }) => {
//   const url = `${API_BASE}/transaction_history/`;
//   const params = {service_id: service_id}
//   const headers = {
//     Authorization: `Bearer ${token}`
//     // 'Access-Control-Allow-Origin':"*"
//   };
//   const res = await axios.get(url, { params, headers});
//   return res.data;
// };

export const fetchTransactionHistory = async ({ service_id, token }) => {
  try {
    // const url = `${API_BASE}/transaction_history/`;
    // const params = { service_id };
    // const headers = { Authorization: `Bearer ${token}` };

    // const res = await axios.get(url, { params, headers });
    const res = axios
      .get(
        "https://dev.expressfintech.in/transaction_history/?service_id=111",
        {
          headers: {
            "Authorization": `Bearer ${token}`, // <-- make sure token is fresh
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log("raw data",res.data))
      .catch((err) => console.error(err));

    // console.log('Status:', res.status);
    // console.log('Response data:', res.data);

    return res.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};
