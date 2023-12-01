import { itemIdActions } from "./itemId/itemId.slice";
import { errorActions } from "./error/error.slice";


export const rootActions = {
  ...itemIdActions,
  ...errorActions
};
