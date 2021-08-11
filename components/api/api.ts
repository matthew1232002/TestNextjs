import {PostModel} from "../../models/Post.model";
import {CommentModel} from "../../models/Comment.model";

const FIREBASE_DOMAIN = 'https://react-2faef-default-rtdb.firebaseio.com/';

export async function getAllPosts() {
    const response = await fetch(`${FIREBASE_DOMAIN}/posts.json`);
    const data: PostModel[] = await response.json();

    const transformedQuotes = [];

    for (const key in data) {
        const quoteObj = {
            id: key,
            ...data[key],
        };

        transformedQuotes.push(quoteObj);
    }

    return transformedQuotes;
}

export async function getSinglePost(postId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/posts/${postId}.json`);
    const data:PostModel = await response.json();

    const loadedQuote = {
        id: postId,
        ...data
    };

    return loadedQuote;
}

export async function addQuote(quoteData) {
    await fetch(`${FIREBASE_DOMAIN}/posts.json`, {
        method: 'POST',
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return null;
}

export async function addComment(requestData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.postId}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData.commentData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data: CommentModel = await response.json();

    return {commentId: data.id};
}

export async function getAllComments(postId: string) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${postId}.json`);

    const data: CommentModel[] = await response.json();

    const transformedComments = [];

    for (const key in data) {
        const commentObj = {
            id: key,
            ...data[key],
        };

        transformedComments.push(commentObj);
    }

    return transformedComments;
}
