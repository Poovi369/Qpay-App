import axios from 'axios';

const API_BASE = 'https://dev.expressfintech.in';
// const API_BASE = 'http://64.227.189.27/wallet/api/v1';


export const fetchTransactionHistory = async ({ service_id, token }) => {
  const url = `${API_BASE}/transaction_history/`;
  const params = {service_id: service_id}
  const headers = {
    Authorization: `Bearer ${token}`
  };
  // const res = await axios.get(url, { params, headers});
  const res = await axios.get(`https://dev.expressfintech.in/transaction_history/?service_id=${service_id}`, headers)
  return res.data;
};
