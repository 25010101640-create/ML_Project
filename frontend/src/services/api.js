import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://ml-project-renish4.vercel.app';

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const FAST_TIMEOUT_MS = 15000;
const WAKE_TIMEOUT_MS = 120000;

export const predictFraud = async (claimData, onWakingUp) => {
  const request = (timeout) => API.post('/predict', claimData, { timeout });

  try {
    return await request(FAST_TIMEOUT_MS);
  } catch (firstError) {
    const isServerWaking =
      firstError.code === 'ECONNABORTED' ||
      !firstError.response ||
      firstError.response?.status >= 502;

    if (!isServerWaking) {
      throw new Error(
        firstError.response?.data?.message || 'Prediction failed. Please try again.'
      );
    }

    if (typeof onWakingUp === 'function') onWakingUp();

    try {
      return await request(WAKE_TIMEOUT_MS);
    } catch (secondError) {
      if (secondError.code === 'ECONNABORTED' || !secondError.response) {
        throw new Error(
          'The server is still waking up from sleep. Please wait about a minute, then try again.'
        );
      }
      throw new Error(
        secondError.response?.data?.message || 'Prediction failed. Please try again.'
      );
    }
  }
};

export default API;
