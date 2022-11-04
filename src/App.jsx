import axios from 'axios';
import { Card } from 'components/Card';
import { Controls } from 'components/Controls';
import { Header } from 'components/Header';
import { List } from 'components/List';
import { Main } from 'components/Main';
import { ALL_COUNTRIES } from 'config';

import { useState, useEffect } from 'react';

export const App = () => {
    const [countries, setCountries] = useState([]);
    console.log('countries: ', countries);
    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);
    return (
        <>
            <Header />
            <Main>
                <Controls />
                <List>
                    {countries.map(c => {
                        const countryInfo = {
                            name: c.name,
                            img: c.flags.png,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        };
                        return <Card key={c.name} {...countryInfo} />;
                    })}
                </List>
            </Main>
        </>
    );
};
