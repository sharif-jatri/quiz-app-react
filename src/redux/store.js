import { combineReducers } from "redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth";

const rootReducer = combineReducers({
    auth: authReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
        ],
    });
    const persistor = persistStore(store);
    return { store, persistor };
};

// export default configureStore({
//     reducer: {
//         auth: authReducer
//     }
// });
