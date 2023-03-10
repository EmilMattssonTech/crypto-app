import "./Cryptocurrencies.scss";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../../Services/cryptoApi";
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

export default function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            type="text"
            placeholder="Search Crypto Currency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos &&
          cryptos.map((crypto) => {
            const uniqueKey = `${crypto.rank}-${crypto.name}-${crypto.uuid}`;

            return (
              <Col
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={uniqueKey}
              >
                <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
                  <Card
                    title={`${crypto.rank}. ${crypto.name}`}
                    extra={
                      <img className="crypto-image" src={crypto.iconUrl} />
                    }
                    hoverable
                  >
                    <p>Price: {millify(crypto.price)}</p>
                    <p>Market Cap: {millify(crypto.marketCap)}</p>
                    <p>Daily Change: {millify(crypto.change)}%</p>
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </>
  );
}
