import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: {
    // Thêm các reducers của bạn ở đây
    data: reducer,
  },
});

export default store;