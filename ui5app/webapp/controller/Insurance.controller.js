sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History"
  ], function (Controller, Filter, FilterOperator, History) {
    "use strict";
  
    return Controller.extend("ui5app.controller.Insurance", {
  
      onInit: function () {
   
      },
      onFilterInsurances(oEvent) {
		// build filter array
		const aFilter = [];
		const sQuery = oEvent.getParameter("query");
		
        if (sQuery) {
			aFilter.push(new Filter("insuranceHolder", FilterOperator.Contains, sQuery));
		}

		// filter binding
		const oList = this.byId("insuranceTable");
		const oBinding = oList.getBinding("items");
		oBinding.filter(aFilter);
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
  