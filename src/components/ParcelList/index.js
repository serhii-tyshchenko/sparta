import React from 'react';

import ParcelListItem from './ParcelListItem';

function ParcelList(props) {
    return (
        <div className="parcels">
            <ul className="parcels__list">
                {props.parcels.map(item => (
                    <ParcelListItem
                        parcel={item}
                        key={item.number}
                        getParcelStatus={props.getParcelStatus}
                        editParcel={props.editParcel}
                        removeParcel={props.removeParcel}
                        setParcelColor={props.setParcelColor}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ParcelList;
