import React from 'react';

const fechaHora = '';

const TableDate = ({ fechaHora }) => {
   console.log('Ahora: ' + fechaHora);
    return (
        <div className="currency-table--date">
            <p><b>{fechaHora}</b></p>
        </div>
    );
};

export default TableDate;
