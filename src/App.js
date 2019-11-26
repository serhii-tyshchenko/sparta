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
    parcels: ["20450182437180", "20450123167687"],
    responseText: ""
  };

  componentDidMount() {
    localStorage.getItem("parcelList")
      ? this.setState(JSON.parse(localStorage.getItem("parcelList")))
      : this.setState({
          // parcels: [20450182437180, 20450123167687],
          responseText: ""
        });
    this.setState({ responseText: "" });
  }

  componentDidUpdate() {
    localStorage.setItem("parcelList", JSON.stringify(this.state));
  }

  getData = query => {
    return axios.post("https://api.novaposhta.ua/v2.0/json/", {
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
    });
  };
  formatResponse = response => {
    const data = response.data.data[0];
    return {
      number: data.Number,
      citySender: data.CitySender,
      cityRecipient: data.CityRecipient,
      payer: data.PayerType,
      status: data.Status
    };
  };

  searchParcel = query => {
    if (this.state.parcels.includes(query)) {
      alert("Parcel already added!");
      return;
    }
    this.getData(query)
      .then(response => {
        this.setState({
          parcels: [...this.state.parcels, query],
          responseText: this.formatResponse(response)
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
    this.getData(number)
      .then(response => {
        this.setState({
          responseText: this.formatResponse(response)
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
