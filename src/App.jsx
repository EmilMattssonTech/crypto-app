import "./App.scss";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar/Navbar";
import Exchanges from "./components/Exchanges/Exchanges";
import Homepage from "./components/Homepage/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies/Cryptocurrencies";
import News from "./components/News/News";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoLand <br />
            CryptoLand corportaion (C) 2023
          </Typography.Title>
          <Space>
            <Link to="/"></Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
