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
    count: simplified ? 1 : 12,
  });

  if (!cryptoNews?.value) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
