import { useRouter } from 'next/router';
import client from '../../config';
import PostDetail from '../../components/postDetail';

const Post = (props) => {
    return (
        <>
            <PostDetail pageContent={props} />
        </>
    )
}

export default Post;

Post.getInitialProps = async ({ query }) => {
    const entry = await client.getEntry(`${query.id}`);
    return entry;
}