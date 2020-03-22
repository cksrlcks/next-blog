import { useRouter } from 'next/router'
import CodeBlock from '../components/codeRender';
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';
import formatDate from '../components/renderDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = ({ pageContent }) => {
    const { title, postbody, tags } = pageContent.fields;
    const { updatedAt } = pageContent.sys;
    return (
        <PostBody>
            <TitleBlock className="title">{title}</TitleBlock>
            <div className="meta">
                <div className="date"><ClockIcon /> {formatDate(updatedAt)}</div>
                {tags &&
                    <div className="tags">
                        <TagIcon />
                        <TagsList>
                            {tags.map((tag, index) => <li key={index}>{tag}</li>)}
                        </TagsList>
                    </div>
                }

            </div>

            <div className="post-body">
                <ReactMarkdown source={postbody} renderers={{ code: CodeBlock }} />
            </div>
        </PostBody>
    )
}

export default Post;
const TitleBlock = styled.h1`
    font-size:3em;
    line-height:1.3em;
    letter-spacing:-0.02em;
    margin-bottom:1.7em;
    font-weight: 800;
    word-break: keep-all;
`
const PostBody = styled.div`
    padding:3em 1em;
    .meta{
        padding-bottom:2em;
        &:after{
            content:"";
            display:block;
            clear:both;
        }
        .tags{
            float:left;
        }
        .date{
            float:left;
            margin-right:1em;
            color:#8794a3;
        }
    }
    .post-body{
        padding-top:2em;
        border-top:1px solid #eee;
    }
`;
const TagsList = styled.ul`
    display:inline-block;
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
    margin:0 1em 0 0.4em;
    opacity:0.5;
`
const ClockIcon = styled(FontAwesomeIcon).attrs({
    icon: "clock", color: "#8794a3"
})`
    display:inline-block;
    margin:0 0.6em 0 0.4em;
    opacity:0.5;
`

