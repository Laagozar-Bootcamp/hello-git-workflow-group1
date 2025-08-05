/*global QUnit*/

sap.ui.define([
	"sapui5/trng/trng1/controller/Training1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Training1 Controller");

	QUnit.test("I should test the Training1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
