import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../global.styled';

export default function ConnectApp(store, history, theme) {
    return function ConntectedApp(App) {
        const ProvidedApp = () => (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <App />
                    </ThemeProvider>
                </ConnectedRouter>
            </Provider>
        );
        return ProvidedApp;
    };
}
