import { useState, useEffect } from 'react';

type FetchDataCallback<T> = () => Promise<T>;

type UseFetchDataResult<T> = {
  isLoading: boolean;
  data: T | null;
  error: string | null;
};

export const useFetchData = <T>(callback: FetchDataCallback<T>): UseFetchDataResult<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await callback();
        if (mounted) {
          setData(result);
        }
      } catch (e: any) {
        setError(e.message || 'Something went wrong.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [callback]);

  return { isLoading, data, error };
};
