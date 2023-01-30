import "./Cryptocurrencies.scss";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../../Services/cryptoApi";
import React, { useState } from "react";

export default function Cryptocurrencies({ simplified }) {
  const count = simplified ? 1 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos);

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos &&
          cryptos.map((crypto) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
              <Link to={`/crypto/${crypto.id}`}></Link>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={<img className="crypto-image" src={crypto.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}%</p>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}
