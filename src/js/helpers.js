import { TIMEOUT_SEC } from './config.js';

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long. Timeout after ${seconds} seconds.`)
      );
    }, seconds * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  const fetchOptions = uploadData
    ? {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      }
    : undefined;

  try {
    const response = await Promise.race([
      fetch(url, fetchOptions),
      timeout(TIMEOUT_SEC),
    ]);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${data.message} (${response.status})`);
    }

    return data;
  } catch (err) {
    throw err;
  }
};