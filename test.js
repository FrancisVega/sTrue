sTrue("Testeamos el query %shapes%", function() {

  // @Sketch-Setup
  // En el documento de sketch debe haber al menos una capa de tipo shape

  // @Setup
  var $shapesQuery = $('%shapes%');
  var shapes = $shapesQuery.layers;

  var arrayClass = [];
  for(var i=0, len=shapes.length; i<len;i++) { arrayClass.push(shapes[i].class())	}
  uniqueArray = arrayClass.filter(function(item, pos) { return arrayClass.indexOf(item) == pos; });

  // @Tests	
  this.true(uniqueArray.length === 1);
  this.class(uniqueArray[0], "MSShapeGroup");
  this.true($shapesQuery.length === shapes.length);
  this.true(shapes.length > 0);

  // @End
  $shapesQuery = null;
  shapes = null;

});
