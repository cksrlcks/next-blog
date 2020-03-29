import { useRouter } from 'next/router';
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
                <ReactMarkdown
                    source={postbody}
                    skipHtml={false}
                    escapeHtml={false}
                    renderers={
                        {
                            code: CodeBlock, link: props => <a href={props.href} target="_blank" rel='nofollow noreferrer noopener'>{props.children}</a>
                        }

                    }
                />
            </div>
        </PostBody>
    )
}

export default Post;
const TitleBlock = styled.h1`
    font-size:3.2em;
    line-height:1.3em;
    letter-spacing:-0.02em;
    margin-bottom:1.5em;
    font-weight: bold;
    word-break: keep-all;
    @media (max-width: 968px) {
        font-size:2em;
    }
    @media (max-width: 768px) {
        font-size:1.8em;
        margin-bottom:1.2em;
    }
`
const PostBody = styled.div`
    padding:3em 1em;
    @media (max-width: 968px) {
        padding:1em 1em;
    }
    .meta{
        padding-bottom:2em;
        &:after{
            content:"";
            display:block;
            clear:both;
        }
        .tags{
            float:left;
            padding-left: 0.6em;
            position:relative;
            &:after{
                content:"";
                display:block;
                position:absolute;
                width:1px;
                height:0.8em;
                background:#eee;
                left:0;
                top:0.1em;
            }
        }
        .date{
            float:left;
            margin-right:1em;
            color:#8794a3;
        }
    }
    .post-body{
        padding-top:1em;
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

