import { useState, useEffect } from "react";
// from npm package
import axios from "axios";

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
