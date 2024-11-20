sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
    (Controller, MessageToast) => {
      "use strict";
      let oRouter;
      return Controller.extend("ui5app.controller.Tiles", {
        onInit(){
          oRouter = this.getOwnerComponent().getRouter();
        },
        onPressCreate() {
			    oRouter.navTo("newInsurance"); // router name
          MessageToast.show("Create New");
        },
        onPressShow() {
            oRouter.navTo("insuranceList");
            MessageToast.show("Show");
          }
      });
    }
  );