import { create } from "zustand";
const usePostStore = create((Set) => ({
  post: [],
  createPost: (post) => Set((state) => ({ post: [...state.post, post] })),
  setPost: (post) => Set({ post }),
}));
export default usePostStore;
