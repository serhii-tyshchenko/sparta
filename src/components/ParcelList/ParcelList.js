import React from 'react';

import { ParcelListItem } from './ParcelListItem';

export const ParcelList = props => {
    const {
        parcels,
        getParcelStatus,
        editParcel,
        removeParcel,
        setParcelColor
    } = props;
    return (
        <div className="parcels">
            <ul className="parcels__list">
                {parcels.map(item => (
                    <ParcelListItem
                        parcel={item}
                        key={item.number}
                        getParcelStatus={getParcelStatus}
                        editParcel={editParcel}
                        removeParcel={removeParcel}
                        setParcelColor={setParcelColor}
                    />
                ))}
            </ul>
        </div>
    );
};
