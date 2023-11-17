import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function OneCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {}, [name]);
  return <div>{name}</div>;
}
