import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Pagination = ({ skip, range, handlePaginationChange }) => {
    skip = !!skip ? skip : 0;

    const [page, setPageNumber] = useState(1);

    useEffect(() => {
        return setPageNumber(skip);
    }, [skip]);

    const moveToNextPage = () => {
        if (page > 1) {
            handlePaginationChange(page - 1);
            return setPageNumber(page - 1);
        }

        return null;
    };

    const moveToPreviousPage = () => {
        if (page < range[range.length - 1]) {
            handlePaginationChange(page + 1);
            return setPageNumber(page + 1);
        }

        return null;
    };

    const moveToPage = (pageNumber) => {
        handlePaginationChange(pageNumber);
        return setPageNumber(pageNumber);
    };

    const renderPageIndicators = (number, index) => (
        <li key={index} >
            <a href="#"
                className={`pagination-number ${number === page ? 'selected' : ''}`}
                onClick={() => moveToPage(number)}>
                {number}
            </a>
        </li>
    );

    return (
        <>
            <PagitionBlock>
                {range.length > 1 ?
                    <li>
                        <a href="#" className="pagination-button"
                            onClick={moveToNextPage}>
                            <span className="pagination-button-label">이전</span>
                        </a>
                    </li> : null}

                {range.map(renderPageIndicators)}

                {range.length > 1 ?
                    <li>
                        <a href="#" className="pagination-button"
                            onClick={moveToPreviousPage}>
                            <span className="pagination-button-label">다음</span>
                        </a>
                    </li> : null}
            </PagitionBlock>
        </>
    )
}

export default Pagination;

const PagitionBlock = styled.ul`
    margin:2em auto;
    text-align:center;
    li{
        display:inline;
        a{
            color:#8794a3;
            border:1px solid #eef0f2;
            margin-left:-1px;
            padding:6px 12px;
            line-height:1em;
            background:#fff;

            &.selected{
                color:#fff;
                background:rgb(34,184,207);
                border-color:rgb(34,184,207);
            }

        }
        &:first-child a {
            margin-left:0;
            border-top-left-radius: 4px;
            border-bottom-left-radius:4px;
        }
        &:last-child a {
            border-top-right-radius: 4px;
            border-bottom-right-radius:4px;
        }
    }

`