import axios from "axios";

const API_BASE = "https://dev.expressfintech.in";
// const API_BASE = 'http://64.227.189.27/wallet/api/v1';

export const fetchTransactionHistory = async ({ service_id, token }) => {
  try {
    const url = `${API_BASE}/transaction_history/`;
    const params = { service_id };
    const headers = { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk` };
    const res = await axios.get(url, { params, headers });
    return res;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};
