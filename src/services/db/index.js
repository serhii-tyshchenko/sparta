// 20450182437180
// 20450123167687
// 20450122509902
// 20450122509297
// 20450120407420
// 20450120333846
// 20450120950871

function getStateFromDB() {
    const intitalState = {
        parcels: []
    };
    return localStorage.getItem('parcelList')
        ? JSON.parse(localStorage.getItem('parcelList'))
        : intitalState;
}

function saveStateToDB(state) {
    localStorage.setItem('parcelList', JSON.stringify(state));
}

export { getStateFromDB, saveStateToDB };
