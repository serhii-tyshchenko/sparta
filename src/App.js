import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import ParcelList from "./components/ParcelList";
import Results from "./components/Results";

class App extends Component {
  state = {
    parcels: [],
    responseText: ""
  };
  // 20450182437180
  //0500059428732

  componentDidMount() {
    localStorage.getItem("parcelList")
      ? this.setState(JSON.parse(localStorage.getItem("parcelList")))
      : this.setState({ parcels: [], responseText: "" });
  }

  componentDidUpdate() {
    localStorage.setItem("parcelList", JSON.stringify(this.state));
  }

  searchParcel = query => {
    if (this.state.parcels.includes(query)) return;
    axios
      .post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: "",
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: query,
              Phone: ""
            }
          ]
        }
      })
      .then(response => {
        const responseText = response.data.data[0].Status;
        this.setState({
          parcels: [...this.state.parcels, query],
          responseText: responseText
        });
      })
      .catch(error => console.log(error));
  };
  removeParcel = id => {
    this.setState({
      parcels: [...this.state.parcels.filter(item => item !== id)]
    });
  };
  getParcelStatus = number => {
    axios
      .post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: "",
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: number,
              Phone: ""
            }
          ]
        }
      })
      .then(response => {
        const responseText = response.data.data[0].Status;
        this.setState({
          responseText: responseText
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchForm submitForm={this.searchParcel} />
          <ParcelList
            getParcelStatus={this.getParcelStatus}
            removeParcel={this.removeParcel}
            parcels={this.state.parcels}
          />
          <Results parcelStatus={this.state.responseText} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
