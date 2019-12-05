const getStateFromDB = () => {
    const intitalState = {
        parcels: []
    };
    return localStorage.getItem('parcelList')
        ? JSON.parse(localStorage.getItem('parcelList'))
        : intitalState;
};

const saveStateToDB = state => {
    localStorage.setItem('parcelList', JSON.stringify(state));
};

export { getStateFromDB, saveStateToDB };
