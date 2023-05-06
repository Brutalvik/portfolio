import { createTransform } from "redux-persist";

//transform function
const myTransform = createTransform(
  (inboundState, key) => {
    return inboundState;
  },
  (outboundState, key) => {
    return outboundState;
  },
  // Configuration options
  { whitelist: ["myReducer"] } // Whitelist the reducer that needs transformation
);
