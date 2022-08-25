var Continuar = `S`

while (Continuar == `S`) {
    alert(`Seja bem vindo ao site de venda de Cursos Da Dnc`)
    var Verificador = `S`
    while (Verificador == `S`) {
        var CursoNaDnc = prompt(`Escolha quais cursos o senhor deseja comprar
        1. Formação Em Dados = R$ 20.000,00 
        2. Formação Em Projetos = R$ 15.000,00 
        3. Formação Em Marketing = R$ 13.000,00 
        4. Formação Em Produto = R$ 18.000,00 
        5. Formação Em Tecnologia = R$ 19.000,00`, `exemplo: "32514"
        `)
        if(isNaN(CursoNaDnc) || CursoNaDnc.length > 5 || CursoNaDnc.length < 1 
        || CursoNaDnc[0] > 5 || CursoNaDnc[0] < 1
        || CursoNaDnc[1] > 5 || CursoNaDnc[1] < 1
        || CursoNaDnc[2] > 5 || CursoNaDnc[2] < 1
        || CursoNaDnc[3] > 5 || CursoNaDnc[3] < 1
        || CursoNaDnc[4] > 5 || CursoNaDnc[4] < 1) {
            alert(`Por favor digite somente números entre 1 a 5`)
        } else {
            Verificador = `N`
            alert(`Obrigado`)
            if(parseInt(CursoNaDnc[0]) == 1) {
                    var QuantidadeDeCursosCompradosVerificador = `S`
                    var Verificador2 = `S`
                    while (QuantidadeDeCursosCompradosVerificador == `S`) {
                        while (Verificador2 == `S`) {
                        var QuantidadeDeCursosComprados = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Dados, cada curso custa: R$20.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados)) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador2 = `N`
                            }
                        }
                        var SomaTotal1 = parseInt(QuantidadeDeCursosComprados) * 20000
                        QuantidadeDeCursosCompradosVerificador = prompt(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados} cursos sobre Formação Em Dados? Digite "S" para sim. O total foi de: R$${SomaTotal1}`)
                        if(QuantidadeDeCursosCompradosVerificador != `S`) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador = `N`
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados} cursos sobre Formação Em Dados, e gastou um total de: R$${SomaTotal1}`)
                    QuantidadeDeCursosCompradosVerificador = `N`
            }
        }
    }
}