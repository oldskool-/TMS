import useFetch from "../useFetch.tsx";
import Specification from "./Specification.tsx";
import React from "react";

const LoadSpecification = () => {
  const { data: specs, isPending, error }  = useFetch('http://localhost:8000/specification');

  return (
    <div className="specification">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div> }
      { specs && <Specification specs={specs} />}
    </div>
  );
}
 
export default LoadSpecification;