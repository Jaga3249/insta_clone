import { create } from "zustand";
const usePostStore = create((Set) => ({
  posts: [],
  createPost: (post) => Set((state) => ({ posts: [...state.posts, post] })),
  deletePost: (id) =>
    Set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
  setPosts: (posts) => Set({ posts }),

  addcomment: (postid, comment) =>
    Set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === postid) {
          return { ...post, comments: [...post.comments, comment] };
        }
        return post;
      }),
    })),
}));
export default usePostStore;
