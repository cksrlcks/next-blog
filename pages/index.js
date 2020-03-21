import React, { useEffect } from 'react';
import CardList from '../components/cardList';
import client from '../config';
import styled from 'styled-components';

function Home(props) {
    useEffect(() => {
        var grid = document.querySelector('.grid');
        var msnry = new Masonry(grid, {
            itemSelector: '.grid-item'
        });
    }, [])
    return (
        <CardContainer className="grid">
            {props.items.map(item => (
                <CardList item={item} key={item.sys.id} />
            ))}
        </CardContainer>
    )
}

Home.getInitialProps = async () => {
    const enteries = await client.getEntries();
    return enteries;
}

export default Home;

const CardContainer = styled.div`
    padding:2em 0 1em;
    @media (max-width: 968px) {
        padding:0.5em 0;
    }
`