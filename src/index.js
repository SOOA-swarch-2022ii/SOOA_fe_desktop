import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import Home from "./Pages/Home/Home";

const client = new ApolloClient({
    uri: 'http://localhost:8090/graphql',
    cache: new InMemoryCache(),
  });

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApolloProvider client={client}><Main />
    </ApolloProvider>);
