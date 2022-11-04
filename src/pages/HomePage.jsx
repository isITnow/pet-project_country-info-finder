import { useState, useEffect } from 'react';
import axios from 'axios';
import { Controls } from 'components/Controls';
import { Card } from 'components/Card';
import { List } from 'components/List';
import { ALL_COUNTRIES } from 'config';
import { useNavigate } from 'react-router-dom';

export const HomePage = ({ countries, setCountries }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }
    }, []);
    return (
        <>
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
                    return (
                        <Card
                            key={c.name}
                            {...countryInfo}
                            onClick={() => navigate(`/country/${c.name}`)}
                        />
                    );
                })}
            </List>
        </>
    );
};
