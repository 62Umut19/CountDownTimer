sap.ui.define([
	"../BaseController",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"],
	function (BaseController, MessageBox, JSONModel) {
		"use strict";

		return BaseController.extend("com.rc.controller.countdown.Countdown", {
			onInit: function () {
				this.timer = {
					"days": 0,
					"hours": 0,
					"minutes": 0,
					"seconds": 0
				}

				let myTimerModel = new JSONModel(this.timer);
                this.getView().setModel(myTimerModel, "timer");

				setInterval(this.calculateTime.bind(this), 1000);
			},

            calculateTime: function(){
                let techedDate = new Date("Dec 8 2023");
				let currentDate = new Date();
				let diff = techedDate.getTime() - currentDate.getTime(); //Time is in milliseconds

				this.timer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
				this.timer.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				this.timer.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60 ));
				this.timer.seconds = Math.floor((diff % (1000 * 60)) / (1000));

				this.getView().getModel("timer").setData(this.timer);
			}
		});
	}
);
