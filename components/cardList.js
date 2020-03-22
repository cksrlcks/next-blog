import Link from 'next/link';
import styled from 'styled-components';
import formatDate from '../components/renderDate';

const CardList = ({ item }) => {
    const { title, summary, featuredImage } = item.fields;
    const { updatedAt, id, contentType } = item.sys;

    const postType = contentType.sys.id;
    const pageType = postType.replace('Post', '')

    const featuredImageUrl = featuredImage && featuredImage.fields.file.url;

    return (
        <Card className="grid-item">
            <div className="card-wrapper">
                {featuredImage && <Link href={`/${pageType}/[id]`} as={`/${pageType}/${id}`}><a className="feature-img" style={{ backgroundImage: "url(" + featuredImageUrl + ")" }}></a></Link>}
                <Link href={`/${pageType}/[id]`} as={`/${pageType}/${id}`}>
                    <a className="content">
                        <h4 className="title">{title}</h4>
                        <p className="summary">{summary}</p>
                    </a>
                </Link>
                <div className="date">{formatDate(updatedAt)}</div>
            </div>
        </Card>
    )
}

export default CardList;

const Card = styled.div`
    width:33.333%;
    box-sizing:border-box;
    padding:0.6em;
    @media (max-width: 968px) {
       width:50%;
      }
    @media (max-width: 768px) {
        width:100%;
    }
    .card-wrapper{
        display:block;
        background:#fff;
        height:100%;
        border-radius:4px;
        overflow:hidden;
        border:1px solid #eee;
        box-shadow:3px 3px 10px rgba(0,0,0,0.015);
        transition:all 0.2s ease;
        position:relative;

        &:hover{
            border-color:#ddd;
            box-shadow:3px 3px 20px rgba(0,0,0,0.035);
            transform:translateY(-5px)
        }

        .feature-img{
            width:100%;
            padding-top:52%;
            position:relative;
            display:block;
            background-position:center;
            background-size:cover;
        }
        .content{
            display:block;
            padding:1.2em 1.2em;
            box-sizing:border-box;
            .title{
                color:#223141;
                font-weight:500;
                margin-bottom:0.4em;
                text-overflow:ellipsis;
                overflow:hidden;
                white-space:nowrap;
            }
            .summary{
                font-size:13px;
                color:#8794A3;
                
                line-height:1.4em;
                display:-webkit-box;
                -webkit-line-clamp:3;
                -webkit-box-orient:vertical;
                text-overflow:ellipsis;
                overflow:hidden;
                max-height:4.2em;
            }
        }

        .date{
            box-sizing:border-box;
            border-top:1px solid #eee;
            padding:1.2em;
            font-size:13px;
            color:#8794A3;
        }
    }
`