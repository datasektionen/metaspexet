import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const Biljetter = () => {
    useEffect(() => {
        window.location.replace('https://metaspexet.confetti.events/');
    });
    return <Layout></Layout>;
};

export default Biljetter;
