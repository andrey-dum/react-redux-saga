import React from 'react';

const Alert = ({text}) => {
    return (
        <div class="alert alert-danger" role="alert">
            {text}
        </div>
    );
}

export default Alert;
