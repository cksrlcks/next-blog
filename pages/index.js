import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CardList from '../components/cardList';
import client from '../config';
import styled from 'styled-components';
import Pagination from '../components/paginator';

const calculateRange = (length) => Array.from({ length }, (v, k) => k + 1);

function Home(props) {

    const router = useRouter();
    const total = props.total;
    const limit = props.limit;
    const rangeLimit = Math.ceil(total / limit);
    const range = calculateRange(rangeLimit);
    const [page, updatePage] = useState(!!props.page ? props.page : 1);


    useEffect(() => {
        // push를 사용하면 클라이언트사이드에서 라우팅을 실행함
        void router.push({ pathname: '/', query: { page: page } })

    }, [page])

    useEffect(() => {
        var grid = document.querySelector('.grid');
        var msnry = new Masonry(grid, {
            itemSelector: '.grid-item'
        });
    })
    /* Pagination 컴포넌트에서의 page state의 변화 감지해서 리랜더링하기*/
    return (
        <>
            <CardContainer className="grid">
                {props.items.map(item => (
                    <CardList item={item} key={item.sys.id} />
                ))}
            </CardContainer>
            <div className="pagination">
                <Pagination handlePaginationChange={(event) => updatePage(event)} range={range} skip={page} />
            </div>
        </>
    )
}

Home.getInitialProps = async ({ query }) => {

    let page = 1;
    //클라이언트사이드에서 재랜더링되면서 쿼리 파라미터가 입력됫을경우 page값을 업데이트
    if (query.page) {
        page = parseInt(query.page + '');
    }
    const limit = 12;

    const { items, total, skip } = await client.getEntries({
        skip: (page - 1) * limit,
        limit,
    });

    return { page, items, total, skip, limit };
}

export default Home;

const CardContainer = styled.div`
    padding:2em 0 1em;
    @media (max-width: 968px) {
        padding:0.5em 0;
    }
`