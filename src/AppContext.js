import React from "react";

const AppContext = React.createContext({
  inventoryData: [],
  isLoggedIn: false,
  updateInventoryData: () => { },
  authorizeUser: () => { }
});
export default AppContext;
