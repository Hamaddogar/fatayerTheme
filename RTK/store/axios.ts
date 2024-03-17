import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const HOST_API = process.env.NEXT_PUBLIC_HOST_API;

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  // headers: {
  //   'x-tenant-id': 'stuffystallion2635.overzaki.info',
  // },
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("Error Response:", error);
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

export async function getRequest(
  url: string,
  options: AxiosRequestConfig = {}
) {
  const res = await axiosInstance.get(url, options);
  return res.data;
}
export async function getRequestWithParams(
  url: string,
  body: IRequest,
  options: AxiosRequestConfig = {}
) {
  const res = await axiosInstance.get(url, options);
  return res.data;
}
export async function postRequest(
  url: string,
  body: IRequest,
  options: AxiosRequestConfig = {}
) {
  const res = await axiosInstance.post(url, body, options);
  return res.data;
}

export async function putRequest(
  url: string,
  body: IRequest,
  options: AxiosRequestConfig = {}
) {
  const res = await axiosInstance.put(url, body, options);
  return res.data;
}

export async function deleteRequest(
  url: string,
  options: AxiosRequestConfig = {}
) {
  const res = await axiosInstance.delete(url, options);
  return res.data;
}

export const endpoints = {
  design: "/design",
  product: {
    list: "/products",
    details: "/product/details",
    search: "/product/search",
    varient: "/varient",
    rows: "/rows",
  },
  category: {
    create: "/categories",
    _list: "/categories",
    list: "/categories/all",
    search: "/category/search",
  },
};

export const defaultConfig = () => {
  const tanentId = localStorage.getItem("hostName");
  let headersObj: any = {
    "Content-Type": "application/json",
  };
  if (tanentId) {
    headersObj = {
      ...headersObj,
      "x-tenant-id": tanentId,
    };
  }
  return {
    headers: headersObj,
  };
};

// export const defaultConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     "x-tenant-id": "",
//   },
// };

export interface IRequest {}
