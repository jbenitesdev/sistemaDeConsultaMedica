// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

type ErrorBoundaryProps = {
    children: any,
};

type ErrorBoundaryState = {
    error: any,
    errorInfo: any,
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(errorInfo);
        this.setState({error, errorInfo});
    }

    render() {
        const {children} = this.props;
        if (this.state.errorInfo) {
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h6">{'Ocorreu um erro'}</Typography>
                        <Typography variant="body1" color="error">
                            {this.state.error && this.state.error.toString()}
                        </Typography>
                        <details style={{whiteSpace: 'pre-wrap'}}>
                            {this.state.errorInfo.componentStack}
                        </details>
                    </Grid>
                </Grid>
            );
        }   
        
        return children;
    }
}

export default ErrorBoundary;
