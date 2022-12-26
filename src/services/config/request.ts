import axios, { AxiosResponse } from 'axios';
import constant from './constant';
axios.defaults.baseURL = constant.baseURL;

const get = (slug: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(slug)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err?.response?.data);
      });
  });
};

const getWithParams = (slug: string, data: any, token: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(slug + data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err?.response?.data);
      });
  });
};

const doPostWithAuth = (slug: string, data: any, token: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(slug, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err?.response?.data);
      });
  });
};

const doPost = (slug: string, data: any) => {
  return new Promise(
    (resolve: (value: unknown) => void, reject: (value: unknown) => void) => {
      axios
        .post(slug, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((res: AxiosResponse<any, any>) => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err?.response?.data);
        });
    },
  );
};

const doPut = (slug: string, data: any, token: string) => {
  return new Promise((resolve, reject) => {
    axios
      .put(slug, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err?.response?.data);
      });
  });
};

const doDelete = (slug: string, data: any, token: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(slug, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err?.response?.data);
      });
  });
};

export { get, getWithParams, doPostWithAuth, doPost, doPut, doDelete };
