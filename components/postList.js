const PostList = ({ item }) => {
    console.log(item)
    const formatDate = date => new Date(date).toDateString();
    return (
        <div>
            <p>{item.fields.title}</p>
            <p>{item.fields.summary}</p>
            <p>{formatDate(item.sys.updatedAt)}</p>
        </div>
    )
}

export default PostList;