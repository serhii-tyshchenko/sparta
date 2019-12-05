import React, { Component } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import SearchForm from './components/SearchForm';
import { ParcelList } from './components/ParcelList';

import * as db from '../src/services/db';
import getDatafromAPI from '../src/services/api';

class App extends Component {
    state = {
        parcels: []
    };

    componentDidMount() {
        this.setState(db.getStateFromDB());
    }

    componentDidUpdate() {
        db.saveStateToDB(this.state);
    }

    addParcel = number => {
        if (
            this.state.parcels.filter(parcel => parcel.number === number)
                .length > 0
        ) {
            alert('Parcel already added!');
            return;
        }
        getDatafromAPI(number)
            .then(response => {
                const newParcel = response;
                newParcel.title = 'untitled';
                newParcel.color = 'white';
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

    editParcel = (number, key, value) => {
        this.setState({
            parcels: this.state.parcels.map(parcel => {
                if (parcel.number === number) {
                    parcel[key] = value;
                }
                return parcel;
            })
        });
    };

    // getParcelStatus = number => {
    //     this.getData(number)
    //         .then(response => {
    //             this.setState({
    //                 responseText: this.formatResponse(response)
    //             });
    //         })
    //         .catch(error => console.log(error));
    // };

    render() {
        return (
            <div className="App">
                <Header />
                <main className="wrapper">
                    <SearchForm addParcel={this.addParcel} />
                    <ParcelList
                        getParcelStatus={this.getParcelStatus}
                        removeParcel={this.removeParcel}
                        editParcel={this.editParcel}
                        parcels={this.state.parcels}
                    />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
