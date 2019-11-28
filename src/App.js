import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import ParcelList from './components/ParcelList';
// import Results from './components/Results';
// const Aftership = require('aftership')('c3f426dd-9ded-4095-9180-69e8301f4d27');
class App extends Component {
    state = {
        parcels: []
    };
    // 20450182437180
    // 20450123167687
    // 20450122509902
    // 20450122509297
    // 20450120407420
    // 20450120333846
    // 20450120950871
    componentDidMount() {
        if (localStorage.getItem('parcelList')) {
            this.setState(JSON.parse(localStorage.getItem('parcelList')));
        }
    }

    componentDidUpdate() {
        localStorage.setItem('parcelList', JSON.stringify(this.state));
    }

    getData = query => {
        return axios.post('https://api.novaposhta.ua/v2.0/json/', {
            apiKey: '',
            modelName: 'TrackingDocument',
            calledMethod: 'getStatusDocuments',
            methodProperties: {
                Documents: [
                    {
                        DocumentNumber: query,
                        Phone: ''
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
    editParcelTitle = (number, title) => {
        this.setState({
            parcels: this.state.parcels.map(parcel => {
                if (parcel.number === number) {
                    parcel.title = title;
                }
                return parcel;
            })
        });
    };
    setParcelColor = (number, color) => {
        console.log(color);
        this.setState({
            parcels: this.state.parcels.map(parcel => {
                if (parcel.number === number) {
                    parcel.color = color;
                }
                return parcel;
            })
        });
    };
    searchParcel = number => {
        if (
            this.state.parcels.filter(parcel => parcel.number === number)
                .length > 0
        ) {
            alert('Parcel already added!');
            return;
        }
        this.getData(number)
            .then(response => {
                const newParcel = {
                    number: number,
                    title: 'untitled',
                    color: 'white',
                    status: this.formatResponse(response).status
                };
                this.setState({
                    parcels: [...this.state.parcels, newParcel]
                });
            })
            .catch(error => console.log(error));
    };

    removeParcel = number => {
        this.setState({
            parcels: [
                ...this.state.parcels.filter(item => item.number !== number)
            ]
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
                <main className="wrapper">
                    <SearchForm submitForm={this.searchParcel} />
                    <ParcelList
                        getParcelStatus={this.getParcelStatus}
                        removeParcel={this.removeParcel}
                        editParcelTitle={this.editParcelTitle}
                        setParcelColor={this.setParcelColor}
                        parcels={this.state.parcels}
                    />
                    {/* <Results parcelStatus={this.state.responseText} /> */}
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
