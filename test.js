sTrue("Testeamos el query %shapes%", function() {

  // @Sketch-Setup
  // En el documento de sketch debe haber al menos una capa de tipo shape.
  // TODO: Crear la capa desde este test.

  // @Setup
  var $shapesQuery = $('%shapes%');
  var shapes = $shapesQuery.layers;

  var arrayClass = [];
  for(var i=0, len=shapes.length; i<len;i++) { arrayClass.push(shapes[i].class())	}
  uniqueArray = arrayClass.filter(function(item, pos) { return arrayClass.indexOf(item) == pos; });

  // @Tests	
  this.true(uniqueArray.length === 1, "Después del filtrado, solo debe de quedar un elemento");
  this.true($shapesQuery.length === shapes.length, "La propiedad length de sQuery debe ser igual a la cantidad de elementos del array");
  this.true(shapes.length > 0, "Debe haber al menos un element en el array de capas");

  // @End
  $shapesQuery = null;
  shapes = null;

});
