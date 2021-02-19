// user(1) -> posts(user:1) -> comments(posts(user:1))
const axios = require('axios');
axios.default.get('https://jsonplaceholder.typicode.com/users/1')
    .then(userResponse => {
        const userData = userResponse.data;

        const userId = userData.id;

        axios.default.get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
            .then(postsResponse => {
                const posts = postsResponse.data;

                const postIds = posts.map(p => p.id);
                for(let postId of postIds){
                    axios.default.get('https://jsonplaceholder.typicode.com/comments?postId='+postId)
                        .then(commentResponse => {
                            console.log({
                                userData,
                                postId,
                                comment: commentResponse.data
                            })
                        })
                }
            })
    })