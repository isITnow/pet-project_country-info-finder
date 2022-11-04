import { useState } from 'react';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { Details } from 'pages/Details';
import { HomePage } from 'pages/HomePage';
import { NotFound } from 'pages/NotFound';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
    const [countries, setCountries] = useState([]);

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <HomePage
                                countries={countries}
                                setCountries={setCountries}
                            />
                        }
                    />
                    <Route path="/country/:name" element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Main>
        </>
    );
};
