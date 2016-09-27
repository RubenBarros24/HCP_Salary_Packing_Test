jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"hcp/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"hcp/test/integration/pages/Worklist",
		"hcp/test/integration/pages/Object",
		"hcp/test/integration/pages/NotFound",
		"hcp/test/integration/pages/Browser",
		"hcp/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "hcp.view."
	});

	sap.ui.require([
		"hcp/test/integration/WorklistJourney",
		"hcp/test/integration/ObjectJourney",
		"hcp/test/integration/NavigationJourney",
		"hcp/test/integration/NotFoundJourney",
		"hcp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});