import { useState, useEffect } from "react";

const useFetch = () => {
  const [res, setRes] = useState();
  const [err, setErr] = useState();

  const url = "https://cdn.ggumim.co.kr/test/image_product_link.json";

  useEffect(() => {
    window
      .fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRes(data);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  return { res, err };
}

export default useFetch;
