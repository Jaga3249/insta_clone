import { create } from "zustand";
const UserProfileStore = create((Set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => Set({ userProfile }),
  addPost: (post) =>
    Set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [...state.userProfile.posts, post.id],
      },
    })),
  deletePost: (postId) =>
    Set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: state.userProfile.posts.filter((id) => id != postId),
      },
    })),
}));
export { UserProfileStore };
