import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import client from '../config';
import PostList from '../components/postList';
import Pagination from '../components/paginator';

const calculateRange = (length) => Array.from({ length }, (v, k) => k + 1);

const Blog = (props) => {

    const router = useRouter();
    const total = props.total;
    const limit = props.limit;
    const rangeLimit = Math.ceil(total / limit);
    const range = calculateRange(rangeLimit);
    const [page, updatePage] = useState(!!props.page ? props.page : 1);

    useEffect(() => {
        // push를 사용하면 클라이언트사이드에서 라우팅을 실행함
        void router.push({ pathname: '/blog', query: { page: page } })

    }, [page])
    /* Pagination 컴포넌트에서의 page state의 변화 감지해서 리랜더링하기*/

    return (
        <>
            <div className="list-inner">
                {props.items.map(item => (
                    <PostList item={item} key={item.sys.id} />
                ))}
            </div>
            <div className="pagination">
                <Pagination handlePaginationChange={(event) => updatePage(event)} range={range} skip={page} />
            </div>
        </>
    )
}

Blog.getInitialProps = async ({ query }) => {
    let page = 1;
    //클라이언트사이드에서 재랜더링되면서 쿼리 파라미터가 입력됫을경우 page값을 업데이트
    if (query.page) {
        page = parseInt(query.page + '');
    }
    const limit = 12;

    const { items, total, skip } = await client.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt',
        skip: (page - 1) * limit,
        limit,
    });

    return { page, items, total, skip, limit };
}

export default Blog;
