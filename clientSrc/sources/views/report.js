import { JetView, plugins } from "webix-jet";

export default class ReportView extends JetView {
	config() {
		var ui = {
			gravity: 2,
			rows: [
				{
					view: "toolbar",
					elements: [
						{ view: "text", label: "on", inputWidth: 200 },
						{
							view: "text", label: "I have spent",
							labelRight: "hours", inputWidth: 200, labelWidth: 150
						},
						{ view: "combo", label: "on", width: 150 }
					]
				},
				{
					cols: [
						{ view: "text", gravity: 7, height: 300 },
						{
							rows: [
								{ template: "", height: 250 },
								{ view: "button", value: "Add Report", height: 50, gravity: 1 }
							]
						}
					]
				},
				{
					view: "combo",
					label: "Show reports for",
					width: 500,
					inputWidth: 400,
					labelWidth: 150,
					options: [
						"All reports", "Without days off", "Beacon Modernization",
						"Education", "Other", "Webix"
					]
				},
				{
					view: "toolbar",
					elements: [
						{
							view: "segmented",
							id: "report:menu",
							options: [
								{ value: "Month", id: "month" },
								{ value: "Reports", id: "reports" }
							]
						},
						{ type: "header", template: "May 2018" },
						{ view: "button", value: "Today" },
						{ view: "segmented", options: ["Month", "Reports"] }
					]
				},
				{
					rows: [{ height: 10 },
					{
						type: "clean", padding: 4, rows: [
							{ $subview: true }
						]
					}
					]
				}
			]
		}
		return ui;
	}

	init(){
		this.use(plugins.Menu, "report:menu");
	}
};
