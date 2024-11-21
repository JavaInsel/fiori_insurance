sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
  ], function (Controller, History) {
    "use strict";
  
    return Controller.extend("ui5app.controller.NewInsurance", {
  
      onInit: function () {
   
      },
      onNavBack() {
		const oHistory = History.getInstance();
		const sPreviousHash = oHistory.getPreviousHash();

		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("main", {}, true);
		}
	    }
  
    });
  });
  