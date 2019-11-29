import axios from 'axios';
// const Aftership = require('aftership')('c3f426dd-9ded-4095-9180-69e8301f4d27');
const formatData = response => {
    const data = response.data.data[0];
    return {
        number: data.Number,
        citySender: data.CitySender,
        cityRecipient: data.CityRecipient,
        payer: data.PayerType,
        status: data.Status,
        date: data.ActualDeliveryDate || new Date().toLocaleString()
    };
};

const getData = number => {
    return axios
        .post('https://api.novaposhta.ua/v2.0/json/', {
            apiKey: '',
            modelName: 'TrackingDocument',
            calledMethod: 'getStatusDocuments',
            methodProperties: {
                Documents: [
                    {
                        DocumentNumber: number,
                        Phone: ''
                    }
                ]
            }
        })
        .then(response => formatData(response));
};

export default getData;
