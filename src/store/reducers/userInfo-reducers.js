import { UPDATE_INVOICES, UPDATE_USER_INFO } from "../actions";

export const initUserInfo = { 
   invoices:[]

};

export default (state = initUserInfo, action) => {
   switch (action.type) {
      case UPDATE_USER_INFO: {
         return { ...state, ...action.payload };
      }
      case UPDATE_INVOICES: {
         return { ...state, invoices: action.payload };
      }
      default:
         return state;
   }
};
