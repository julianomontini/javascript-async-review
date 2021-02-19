const axios = require('axios').default;



const execute = async () => {
    const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    const userId = userResponse.data.id;

    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts?userId='+userId);
    const posts = postsResponse.data;

    const postIds = posts.map(p => p.id);

    const commentsPromises = postIds.map(async pId => {
        const commentsResult = await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+pId);
        return commentsResult.data;
    })

    const allComments = await Promise.all(commentsPromises);
    console.log(allComments);

}
execute().then(() => console.log('Done'));