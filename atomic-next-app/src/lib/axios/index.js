import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    Authorization: process.env.API_TOKEN,
  },
});

export const axiosAbortController = new AbortController();
function onAbort() {
  console.log('api abort');

  const newController = new AbortController();
  newController.signal.onabort = onAbort;
  Object.assign(axiosAbortController, newController);
  axiosInstance.defaults.signal = newController.signal;
}

axiosAbortController.signal.onabort = onAbort;
axiosInstance.defaults.signal = axiosAbortController.signal;

export default axiosInstance;
