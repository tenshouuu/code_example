import React from 'react';

class ErrorsHandler extends React.Component {
    state = {
        errorFound: false,
    };

    componentDidCatch(error, info) {
        this.setState({ errorFound: true });
        // in this case I also want to send more information to Sentry
        console.error(error, info);
    }

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        if (this.state.errorFound) {
            return <span>Что то пошло не так...</span>;
        }

        const { children } = this.props;
        return <>{children}</>;
    }
}

export default ErrorsHandler;
