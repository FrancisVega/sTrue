sTrue("Plugin Testing", function() {
	this.true(1 === "1"); // Fail!
	this.class(context.selection[0], MSLayerGroup); // Pass!
});
