window.onload = function() {

var options = {
	exportEnabled: false,
	animationEnabled: true,
	title:{
		text: "Expenditure"
	},
	legend:{
		horizontalAlign: "right",
		verticalAlign: "center"
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "<b>{name}</b>: {y} Rs (#percent%)",
		indexLabel: "{name}",
		legendText: "{name} (#percent%)",
		indexLabelPlacement: "inside",
		dataPoints: [
			{ y: 6566.4, name: "Rent" },
			{ y: 2599.2, name: "Food" },
			{ y: 1231.2, name: "Party" },
			{ y: 1368, name: "Shopping" },
			{ y: 1284, name: "Grocery"},
			{ y: 622.2, name: "Utilities" }
		]
	}]
};
$("#chartContainer1").CanvasJSChart(options);

}