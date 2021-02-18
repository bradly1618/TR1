/*global QUnit*/

sap.ui.define([
	"tr1/controller/ViewTR.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewTR Controller");

	QUnit.test("I should test the ViewTR controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
