import { JetView, plugins } from "webix-jet";



export default class TopView extends JetView {
	config() {
		var header = {
			view: "toolbar",
			type: "line",
			elements: [
				{ view: "button", value: "Staff Manager", inputWidth: 150, align: "left" },
				{ view: "button", value: "Meeting Rooms", inputWidth: 150, align: "left" },
				{ view: "button", value: "Reporting", inputWidth: 150, align: "left" },
				{ view: "button", value: "Andrey Sokolov", inputWidth: 150, align: "right" },
				{ view: "button", value: "Log Out", inputWidth: 150, align: "right" },
			]
		};

		var menu = {
			view: "tabbar", 
			id: "top:menu",
			options: [
				{ value: "Report", id: "report" },
				{ value: "Vacation/Sick", id: "data" }
			]
		};

		var ui = {
			type: "line", rows: [
				{
					type: "clean",
					padding: 10, margin: 20, rows: [header, menu]
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
		};


		return ui;
	}
	init() {
		this.use(plugins.Menu, "top:menu");
	}
}