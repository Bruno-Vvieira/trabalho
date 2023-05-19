var readline= require("readline-sync");
    console.log("")
    console.log("+------------Passagens Aerias------------+")
    console.log("|                                        |")
    console.log("| 1-Comprar Passagem                     |")
    console.log("| 2-Consultar voos                       |")
    console.log("| 3-Mapa de assentos                     |")
    console.log("| 4-Emitir Ticket                        |")
    console.log("| 0-Encerrar o programa                  |")
    console.log("|                                        |")
    console.log("+----------------------------------------+")
var escolha= readline.question("Escolha uma opcao : ")


if(escolha==1){

var Nome=readline.question("Nome: ")
var SobreNome=readline.question("Sobrenome: ")
var Idade=readline.question("Idade: ")
var assento=readline.question("assento: ")
var Origem=readline.question("Origem: ")
var Destino=readline.question("Destinatario: ")
    console.log("")
    console.log("+----------- Passagens Aereas ----------+ ")
    console.log("Você está em ---> Comprar passagem        ")
    console.log("                                          ")
    console.log("Nome:" +Nome                               )
    console.log("Sobrenome:" +SobreNome                     )
    console.log("Idade: " +Idade                            )
    console.log("Assento: " +assento                        )
    console.log("Origem: " +Origem                          )
    console.log("destino " +Destino                         )



    console.log("")
    console.log("+----------- Passagens Aereas ----------+ ")
    console.log("Você está em ---> Comprar passagem        ")
    console.log("                                          ")
    console.log(" *Resumo da compra*                       ")
    console.log("Cliente: " +Nome+ " " +SobreNome           )
    console.log("Idade: " +Idade                            )
    console.log("Assento: " +assento                        )
    console.log("Voo: " +Origem+ " X " +Destino             )
    console.log("Status do voo: confirmado                 ")
    console.log("                                          ")
    console.log("Valor: R$3.500,00                         ")
}

if(escolha==2){

    console.log("+----------- Passagens Aereas ----------+ ")
    console.log("                                          ")
    console.log("Você está em ---> consulta de Voos        ")
    console.log("                                          ")
    console.log("     Origem  X             Destino        ")
    console.log("----------------------------------------- ")
    console.log("                                          ")
    console.log(      Origem +             "Japão          ")
    console.log(      Origem +             "México         ")
    console.log(      Origem +             "New York       ")
    console.log(      Origem +             "Copenhaga      ")

}

if(escolha==3){

    console.log("+----------- Passagens Aereas ----------+ ")
    console.log("                                          ")
    console.log("Você está em ---> Mapa De Assentos        ")
    console.log("                                          ")
    console.log("----------------------------------------- ")
    console.log(" X A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 X      ")
    console.log("                                          ")
    console.log(" B1 X B3 B4 B5 B6 X B8 B9 B10 B11 B12     ")
    console.log("----------------------------------------- ")

}

if(escolha==4){

    console.log("+--------------Passagens Aereas-------------+ ")
    console.log("                                              ")
    console.log("********************************************* ")
    console.log("*        OBRIGADO POR VIAJAR CONOSCO        * ")
    console.log("*                                           * ")
    console.log("* Cliente: "+Nome+" "+SobreNome+"           * ")
    console.log("* idade: "+Idade+"  Assento:" +assento+"    * ")
    console.log("* Origem/Destino: "+Origem+" > "+ Destino+" * ")
    console.log("* Status do Voo: confirmado                 * ")
    console.log("*                                           * ")
    console.log("********************************************* ")

}

if(escolha==0){

    console.log("Programa encerrado")
}
