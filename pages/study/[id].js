import { useRouter } from 'next/router';
import client from '../../config';

const Post = (props) => {
    console.log(props)
    return (
        <>
            <div>
                <p>{props.fields.title}</p>
            </div>
        </>
    )
}

export default Post;

Post.getInitialProps = async ({ query }) => {
    console.log(query.id)
    const entry = await client.getEntry(`${query.id}`);
    return entry;
}