import axios from 'axios';
import { Button } from 'components/Button';
import { Info } from 'components/Info';
import { searchByCountry } from 'config';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useLocation, useParams } from 'react-router-dom';

export const Details = props => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        axios
            .get(searchByCountry(name))
            .then(({ data }) => setCountry(data[0]));
    }, [name]);

    return (
        <div>
            <Button to={backLinkHref}>
                <IoArrowBack />
                Back
            </Button>
            {country && <Info {...country} />}
        </div>
    );
};
