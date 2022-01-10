import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../reducers';

export const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
