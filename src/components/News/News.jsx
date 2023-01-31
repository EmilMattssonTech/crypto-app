import "./News.scss";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";

import { useGetCryptoNewsQuery } from "../../Services/cryptoNews";

const { Text, Title } = Typography;
const { Option } = Select;

import React from "react";

export default function News({ simplified }) {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrnecy",
    count: simplified ? 10 : 100,
  });

  console.log(cryptoNews);

  return <div>News</div>;
}
