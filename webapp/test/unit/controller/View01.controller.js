/*global QUnit*/

sap.ui.define([
	"ordemdevendas/project1/controller/View01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View01 Controller");

	QUnit.test("I should test the View01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
