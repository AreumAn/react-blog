let postId = 1;

// initial post data
const posts = [
    {
        id: 1,
        title: 'This is title',
        body: 'Content will be here!',
    },
];

/*  
    New post
    POST /api/posts - { title, body }
*/
export const write = ctx => {
    const { title, body } = ctx.request.body;
    postId += 1;
    const post = { id: postId, title, body };
    posts.push(post);
    ctx.body = post;
};

/* 
    Get list of posts data
    GET /api/posts
*/
export const list = ctx => {
    ctx.body = posts;
};

/* 
    Get post data by id
    GET /api/posts/:id
*/
export const read = ctx => {
    const { id } = ctx.params;
    const post = posts.find(p => p.id.toString() === id);
    if (!post) {
        ctx.status = 404;
        ctx.body = {
            message: 'No post',
        };
        return;
    }
    ctx.body = post;
};

/*
    DELETE /api/posts/:id
*/
export const remove = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'No post',
        };
        return;
    }
    // Remove post by index
    posts.splice(index, 1);
    ctx.status = 204; // No Content
};

/* 
    Modify post
    PUT /api/posts/:id - { title, body }
*/
export const replace = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'No post',
        };
        return;
    }
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

/* 
    Update post filed
    PATCH /api/posts/:id - { title, body }
*/
export const update = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'No post',
        };
        return;
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};
