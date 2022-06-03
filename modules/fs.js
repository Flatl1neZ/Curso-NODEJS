const fs = require("fs");
const path = require("path");

//Criar uma pasta
//fs.mkdir(path.join(__dirname, "/test"), (error) => {
//  if (error) {
//    return console.log("Erro: ", error);
//  }

//  console.log("Pasta criada com sucesso!");
//});

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.html"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");

    fs.appendFile(
      path.join(__dirname, "/test", "test.html"),
      "hello world",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );

    fs.readFile(
      path.join(__dirname, "/test", "test.html"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);

// Adicionar a um arquivo

// Ler um arquivo
