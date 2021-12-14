import { useState, useEffect } from 'react';

import { request } from '../api/request';
import { FetchError } from '../types/FetchError';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<FetchError['message'] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await request<T>(url);

        setData(data);
      } catch (error) {
        setError((error as FetchError).message);
      }
    };

    getData();
  }, [url]);

  return [data, error] as const;
};
