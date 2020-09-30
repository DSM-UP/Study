import * as postsAPI from '../api/posts';

const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';

const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
const GET_POST_ERROR = 'posts/GET_POST_ERROR';

export const getPosts = () => async (dispatch) => {
	dispatch({ type: GET_POSTS });
	try {
		const posts = await postsAPI.getPosts();
		dispatch({ type: GET_POSTS_SUCCESS });
	} catch (e) {
		dispatch({ type: GET_POSTS_ERROR, error: e });
	}
};

export const getPost = (id) => async (dispatch) => {
	dispatch({ type: GET_POST });
	try {
		const post = await postsAPI.getPostById(id);
		dispatch({ type: GET_POST_SUCCESS });
	} catch (e) {
		dispatch({ type: GET_POST_ERROR, error: e });
	}
};

const initialState = {
	posts: {
		loading: false,
		data: null,
		error: null,
	},
	post: {
		loading: false,
		data: null,
		error: null,
	},
};

const posts = (state=initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null,
                }
            };
    }
}