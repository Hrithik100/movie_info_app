import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./HomeSlice";
import themeSlice  from "./ThemeSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
        lightMode: themeSlice,
    },
});
