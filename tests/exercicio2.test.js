const verificarIdade=require("../src/exercicio2");
test("idade 18 → maior",()=>{ expect(verificarIdade(18)).toBe("maior"); });
