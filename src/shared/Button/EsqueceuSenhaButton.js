//@flow
import React from 'react';
import Button from '@material-ui/core/Button';

function EsqueceuSenhaButton({label}) {
    return <Button data-testid="button" variant="contained" className="forget-password-btn">{label}</Button>
};

export default EsqueceuSenhaButton