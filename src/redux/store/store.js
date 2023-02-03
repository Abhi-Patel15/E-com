import { configureStore } from '@reduxjs/toolkit'
import { slice } from './slice'
import createSagaMiddleware from 'redux-saga';
import Saga from '../sagas/Saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: slice,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(Saga);