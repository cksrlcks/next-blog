import Link from 'next/link';
import styled from 'styled-components';
import formatDate from '../components/renderDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostList = ({ item }) => {
    const { title, summary, featuredImage, tags } = item.fields;
    const { updatedAt, id, contentType } = item.sys;

    const postType = contentType.sys.id;
    const pageType = postType.replace('Post', '');

    const featuredImageUrl = featuredImage && featuredImage.fields.file.url;
    return (
        <PostItem>
            <div className="post-item-wrapper">
                {featuredImage && <Link href={`/${pageType}/[id]`} as={`/${pageType}/${id}`}><a className="feature-img" style={{ backgroundImage: "url(" + featuredImageUrl + ")" }}></a></Link>}
                <Link href={`/${pageType}/[id]`} as={`/${pageType}/${id}`}>
                    <a className="content">
                        <h4 className="title">{title}</h4>
                        {summary && <p className="summary">{summary}</p>}
                    </a>
                </Link>
                <div className="meta">
                    {tags &&
                        <div className="tags">
                            <TagIcon />
                            <TagsList>
                                {tags.map((tag, index) => <li key={index}>{tag}</li>)}
                            </TagsList>
                        </div>
                    }
                    <div className="date"><ClockIcon /> {formatDate(updatedAt)}</div>
                </div>
            </div>
        </PostItem>
    )
}

export default PostList;

const PostItem = styled.section`
    margin:2em 0 3em;
    padding:0 0.6em 2em;
    border-bottom: 1px solid #efefef;
    &:last-child{
        border-bottom:none;
    }
    .post-item-wrapper{

        .feature-img{
            width:100%;
            padding-top:52%;
            position:relative;
            display:block;
            background-position:center;
            background-size:cover;
            border-radius:4px;
            overflow:hidden;
        }
        .content{
            display:block;
            padding:2em 0.4em 1.5em;
            box-sizing:border-box;
            .title{
                font-size:1.6em;
                color:#223141;
                font-weight:bold;
                margin-bottom:0.7em;
                text-overflow:ellipsis;
                overflow:hidden;
                white-space:nowrap;
                line-height:1.3em;
                letter-spacing: -0.02em;
            }
            .summary{
                font-size:1.2em;
                color:#8794A3;
                line-height:1.4em;
            }
        }
        .meta{
            &:after{
                content:"";
                display:block;
                clear:both;
            }
            .tags{
                float:right;
            }

            .date{
                float:left;
                box-sizing:border-box;
                padding:1em 0;
                font-size:1em;
                color:#8794A3;
            }
        }

       
    }
`

const TagsList = styled.ul`
    display:inline-block;
    padding:1.2em 0.6em;
    li{
        display:inline-block;
        margin-right:0.6em;
        color:#8794a3;
    }
`
const TagIcon = styled(FontAwesomeIcon).attrs({
    icon: "tag", color: "#8794a3"
})`
    display:inline-block;
    margin:0 0.2em 0 0.4em;
    opacity:0.5;
`
const ClockIcon = styled(FontAwesomeIcon).attrs({
    icon: "clock", color: "#8794a3"
})`
    display:inline-block;
    margin:0 0.6em 0 0.4em;
    opacity:0.5;
`