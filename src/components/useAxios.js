import axios from "axios";
import { useState, useEffect } from "react";

export default function useAxios(url) {
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    axios
      .get(
        url,
        { header: { "Content-Type":"application/json" } },
        { cancelToken: source.token }
      )
      .then((res) => {
        // console.log(res.data);
        setResource(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => source.cancel("CleanUp");
  }, [url]);

  return [resource, loading];
}
