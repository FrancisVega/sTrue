sTrue.true(1 == 1, "x tiene que ser true");
sTrue.false(1 == 2, "otro foo");
sTrue.true(1 == 1);
sTrue.false(1 == 1);
sTrue.typeof("1", "string");
sTrue.equal([1, 2, 3, 4].length, 4);
sTrue.notequal(typeof("hola"), typeof("1"));
