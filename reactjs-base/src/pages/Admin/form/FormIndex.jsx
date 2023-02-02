import React from 'react';
import {Outlet} from 'react-router-dom'

function FormIndex(props) {
    return (
        <div> form index
            <Outlet />
        </div>

    );
}

export default FormIndex;