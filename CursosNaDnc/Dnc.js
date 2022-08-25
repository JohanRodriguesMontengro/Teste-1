var Continuar = `S`

while (Continuar == `S`) {
    alert(`Seja bem vindo ao site de venda de Cursos Da Dnc`)
    var Verificador = true
    while (Verificador == true) {
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
            Verificador = true
            var Soma = 0
            if(parseInt(CursoNaDnc[0]) == 1) {
                    var QuantidadeDeCursosCompradosVerificador = true
                    var Verificador1 = `S`
                    while (QuantidadeDeCursosCompradosVerificador == true) {
                        while (Verificador1 == `S`) {
                        var QuantidadeDeCursosComprados1 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Dados, cada curso custa: R$20.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados1) || QuantidadeDeCursosComprados1 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador1 = `N`
                            }
                        }
                        var SomaTotal1 = parseInt(QuantidadeDeCursosComprados1) * 20000
                        Soma = Soma + SomaTotal1
                        QuantidadeDeCursosCompradosVerificador = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados1} cursos sobre Formação Em Dados?. O total foi de: R$${SomaTotal1}`)
                        if(QuantidadeDeCursosCompradosVerificador == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador = true
                            Verificador1 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador = false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados1} cursos sobre Formação Em Dados, e gastou um total de: R$${SomaTotal1}`)
            } else if (parseInt(CursoNaDnc[0]) == 2) {
                var QuantidadeDeCursosCompradosVerificador2 = true
                    var Verificador2 = `S`
                    while (QuantidadeDeCursosCompradosVerificador2 == true) {
                        while (Verificador2 == `S`) {
                        var QuantidadeDeCursosComprados2 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Projetos, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados2) || QuantidadeDeCursosComprados2 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador2 = `N`
                            }
                        }
                        var SomaTotal2 = parseInt(QuantidadeDeCursosComprados2) * 15000
                        Soma = Soma + SomaTotal2
                        QuantidadeDeCursosCompradosVerificador2 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados2} cursos sobre Formação Em Projetos?. O total foi de: R$${SomaTotal2}`)
                        if(QuantidadeDeCursosCompradosVerificador2 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador2 = true
                            Verificador2 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador2 = false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados2} cursos sobre Formação Em Projetos, e gastou um total de: R$${SomaTotal2}`)
            } else if (parseInt(CursoNaDnc[0]) == 3) {
                var QuantidadeDeCursosCompradosVerificador3 = true
                    var Verificador3 = `S`
                    while (QuantidadeDeCursosCompradosVerificador3 == true) {
                        while (Verificador3 == `S`) {
                        var QuantidadeDeCursosComprados3 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Marketing, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados3) || QuantidadeDeCursosComprados3 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador3 = `N`
                            }
                        }
                        var SomaTotal3 = parseInt(QuantidadeDeCursosComprados3) * 13000
                        Soma = Soma + SomaTotal3
                        QuantidadeDeCursosCompradosVerificador3 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados3} cursos sobre Formação Em Marketing?. O total foi de: R$${SomaTotal3}`)
                        if(QuantidadeDeCursosCompradosVerificador3 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador3 = true
                            Verificador3 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador3= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados3} cursos sobre Formação Em Marketing, e gastou um total de: R$${SomaTotal3}`)
            } else if (parseInt(CursoNaDnc[0]) == 4) {
                var QuantidadeDeCursosCompradosVerificador4 = true
                    var Verificador4 = `S`
                    while (QuantidadeDeCursosCompradosVerificador4 == true) {
                        while (Verificador4 == `S`) {
                        var QuantidadeDeCursosComprados4 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Produto, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados4) || QuantidadeDeCursosComprados4 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador4 = `N`
                            }
                        }
                        var SomaTotal4 = parseInt(QuantidadeDeCursosComprados4) * 18000
                        Soma = Soma + SomaTotal4
                        QuantidadeDeCursosCompradosVerificador4 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados4} cursos sobre Formação Em Produto?. O total foi de: R$${SomaTotal4}`)
                        if(QuantidadeDeCursosCompradosVerificador4 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador4 = true
                            Verificador4 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador4= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados4} cursos sobre Formação Em Produto, e gastou um total de: R$${SomaTotal4}`)
            } else if (parseInt(CursoNaDnc[0]) == 5) {
                var QuantidadeDeCursosCompradosVerificador5 = true
                    var Verificador5 = `S`
                    while (QuantidadeDeCursosCompradosVerificador5 == true) {
                        while (Verificador5 == `S`) {
                        var QuantidadeDeCursosComprados5 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Tecnologia, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados5) || QuantidadeDeCursosComprados5 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador5 = `N`
                            }
                        }
                        var SomaTotal5 = parseInt(QuantidadeDeCursosComprados5) * 19000
                        Soma = Soma + SomaTotal5
                        QuantidadeDeCursosCompradosVerificador5 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados5} cursos sobre Formação Em Tecnologia?. O total foi de: R$${SomaTotal5}`)
                        if(QuantidadeDeCursosCompradosVerificador5 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador5 = true
                            Verificador5 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador5= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados5} cursos sobre Formação Em Tecnologia, e gastou um total de: R$${SomaTotal5}`)
                }
                if(parseInt(CursoNaDnc[1]) == 1) {
                    var QuantidadeDeCursosCompradosVerificador6 = true
                    var Verificador6 = `S`
                    while (QuantidadeDeCursosCompradosVerificador6 == true) {
                        while (Verificador6 == `S`) {
                        var QuantidadeDeCursosComprados6 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Dados, cada curso custa: R$20.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados6) || QuantidadeDeCursosComprados6 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador6 = `N`
                            }
                        }
                        var SomaTotal6 = parseInt(QuantidadeDeCursosComprados6) * 20000
                        Soma = Soma + SomaTotal6
                        QuantidadeDeCursosCompradosVerificador6 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados6} cursos sobre Formação Em Dados?. O total foi de: R$${SomaTotal6}`)
                        if(QuantidadeDeCursosCompradosVerificador6 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador6 = true
                            Verificador6 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador6 = false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados6} cursos sobre Formação Em Dados, e gastou um total de: R$${SomaTotal6}`)
            } else if (parseInt(CursoNaDnc[1]) == 2) {
                var QuantidadeDeCursosCompradosVerificador7 = true
                    var Verificador7 = `S`
                    while (QuantidadeDeCursosCompradosVerificador7 == true) {
                        while (Verificador7 == `S`) {
                        var QuantidadeDeCursosComprados7 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Projetos, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados7) || QuantidadeDeCursosComprados7 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador7 = `N`
                            }
                        }
                        var SomaTotal7 = parseInt(QuantidadeDeCursosComprados7) * 15000
                        Soma = Soma + SomaTotal7
                        QuantidadeDeCursosCompradosVerificador7 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados7} cursos sobre Formação Em Projetos?. O total foi de: R$${SomaTotal7}`)
                        if(QuantidadeDeCursosCompradosVerificador7 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador7 = true
                            Verificador7 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador7 = false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados7} cursos sobre Formação Em Projetos, e gastou um total de: R$${SomaTotal7}`)
            } else if (parseInt(CursoNaDnc[1]) == 3) {
                var QuantidadeDeCursosCompradosVerificador8 = true
                    var Verificador8 = `S`
                    while (QuantidadeDeCursosCompradosVerificador8 == true) {
                        while (Verificador8 == `S`) {
                        var QuantidadeDeCursosComprados8 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Marketing, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados8) || QuantidadeDeCursosComprados8 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador8 = `N`
                            }
                        }
                        var SomaTotal8 = parseInt(QuantidadeDeCursosComprados8) * 13000
                        Soma = Soma + SomaTotal8
                        QuantidadeDeCursosCompradosVerificador8 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados8} cursos sobre Formação Em Marketing?. O total foi de: R$${SomaTotal8}`)
                        if(QuantidadeDeCursosCompradosVerificador8 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador8 = true
                            Verificador8 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador8= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados8} cursos sobre Formação Em Marketing, e gastou um total de: R$${SomaTotal8}`)
            } else if (parseInt(CursoNaDnc[1]) == 4) {
                var QuantidadeDeCursosCompradosVerificador9 = true
                    var Verificador9 = `S`
                    while (QuantidadeDeCursosCompradosVerificador9 == true) {
                        while (Verificador9 == `S`) {
                        var QuantidadeDeCursosComprados9 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Produto, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados9) || QuantidadeDeCursosComprados9 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador9 = `N`
                            }
                        }
                        var SomaTotal9 = parseInt(QuantidadeDeCursosComprados9) * 18000
                        Soma = Soma + SomaTotal9
                        QuantidadeDeCursosCompradosVerificador9 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados9} cursos sobre Formação Em Produto?. O total foi de: R$${SomaTotal9}`)
                        if(QuantidadeDeCursosCompradosVerificador9 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador9 = true
                            Verificador9 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador9= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados9} cursos sobre Formação Em Produto, e gastou um total de: R$${SomaTotal9}`)
            } else if (parseInt(CursoNaDnc[1]) == 5) {
                var QuantidadeDeCursosCompradosVerificador10 = true
                    var Verificador10 = `S`
                    while (QuantidadeDeCursosCompradosVerificador10 == true) {
                        while (Verificador10 == `S`) {
                        var QuantidadeDeCursosComprados10 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Tecnologia, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados10) || QuantidadeDeCursosComprados10 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador10 = `N`
                            }
                        }
                        var SomaTotal10 = parseInt(QuantidadeDeCursosComprados10) * 19000
                        Soma = Soma + SomaTotal10
                        QuantidadeDeCursosCompradosVerificador10 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados10} cursos sobre Formação Em Tecnologia?. O total foi de: R$${SomaTotal10}`)
                        if(QuantidadeDeCursosCompradosVerificador10 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador10 = true
                            Verificador10 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador10= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados10} cursos sobre Formação Em Tecnologia, e gastou um total de: R$${SomaTotal10}`)
            }
            if(parseInt(CursoNaDnc[2]) == 1) {
                var QuantidadeDeCursosCompradosVerificador11 = true
                var Verificador11 = `S`
                while (QuantidadeDeCursosCompradosVerificador11 == true) {
                    while (Verificador11 == `S`) {
                    var QuantidadeDeCursosComprados11 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Dados, cada curso custa: R$20.000,00`)
                        if(isNaN(QuantidadeDeCursosComprados11) || QuantidadeDeCursosComprados11 <=0) {
                            alert(`Por favor digite somente números`)
                        } else {
                            Verificador11 = `N`
                        }
                    }
                    var SomaTotal11 = parseInt(QuantidadeDeCursosComprados11) * 20000
                    Soma = Soma + SomaTotal11
                    QuantidadeDeCursosCompradosVerificador11 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados11} cursos sobre Formação Em Dados?. O total foi de: R$${SomaTotal11}`)
                    if(QuantidadeDeCursosCompradosVerificador11 == false) {
                        alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                        QuantidadeDeCursosCompradosVerificador11 = true
                        Verificador11 = `S`
                    } else {
                        QuantidadeDeCursosCompradosVerificador11 = false
                    }
                }
                alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados11} cursos sobre Formação Em Dados, e gastou um total de: R$${SomaTotal11}`)
            } else if (parseInt(CursoNaDnc[2]) == 2) {
                var QuantidadeDeCursosCompradosVerificador12 = true
                    var Verificador12 = `S`
                    while (QuantidadeDeCursosCompradosVerificador12 == true) {
                        while (Verificador12 == `S`) {
                        var QuantidadeDeCursosComprados12 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Projetos, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados12) || QuantidadeDeCursosComprados12 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador12 = `N`
                            }
                        }
                        var SomaTotal12 = parseInt(QuantidadeDeCursosComprados12) * 15000
                        Soma = Soma + SomaTotal12
                        QuantidadeDeCursosCompradosVerificador12 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados12} cursos sobre Formação Em Projetos?. O total foi de: R$${SomaTotal12}`)
                        if(QuantidadeDeCursosCompradosVerificador12 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador12 = true
                            Verificador12 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador12 = false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados12} cursos sobre Formação Em Projetos, e gastou um total de: R$${SomaTotal12}`)
            } else if (parseInt(CursoNaDnc[2]) == 3) {
                var QuantidadeDeCursosCompradosVerificador13 = true
                    var Verificador13 = `S`
                    while (QuantidadeDeCursosCompradosVerificador13 == true) {
                        while (Verificador13 == `S`) {
                        var QuantidadeDeCursosComprados13 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Marketing, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados13) || QuantidadeDeCursosComprados13 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador13 = `N`
                            }
                        }
                        var SomaTotal13 = parseInt(QuantidadeDeCursosComprados13) * 13000
                        Soma = Soma + SomaTotal13
                        QuantidadeDeCursosCompradosVerificador13 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados13} cursos sobre Formação Em Marketing?. O total foi de: R$${SomaTotal13}`)
                        if(QuantidadeDeCursosCompradosVerificador13 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador13 = true
                            Verificador13 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador13= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados13} cursos sobre Formação Em Marketing, e gastou um total de: R$${SomaTotal13}`)
            } else if (parseInt(CursoNaDnc[2]) == 4) {
                var QuantidadeDeCursosCompradosVerificador14 = true
                    var Verificador14 = `S`
                    while (QuantidadeDeCursosCompradosVerificador14 == true) {
                        while (Verificador14 == `S`) {
                        var QuantidadeDeCursosComprados14 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Produto, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados14) || QuantidadeDeCursosComprados14 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador14 = `N`
                            }
                        }
                        var SomaTotal14 = parseInt(QuantidadeDeCursosComprados14) * 18000
                        Soma = Soma + SomaTotal14
                        QuantidadeDeCursosCompradosVerificador14 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados14} cursos sobre Formação Em Produto?. O total foi de: R$${SomaTotal14}`)
                        if(QuantidadeDeCursosCompradosVerificador14 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador14 = true
                            Verificador14 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador14= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados14} cursos sobre Formação Em Produto, e gastou um total de: R$${SomaTotal14}`)
            } else if (parseInt(CursoNaDnc[2]) == 5) {
                var QuantidadeDeCursosCompradosVerificador15 = true
                    var Verificador15 = `S`
                    while (QuantidadeDeCursosCompradosVerificador15 == true) {
                        while (Verificador15 == `S`) {
                        var QuantidadeDeCursosComprados15 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Tecnologia, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados15) || QuantidadeDeCursosComprados15 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador15 = `N`
                            }
                        }
                        var SomaTotal15 = parseInt(QuantidadeDeCursosComprados15) * 19000
                        Soma = Soma + SomaTotal15
                        QuantidadeDeCursosCompradosVerificador15 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados15} cursos sobre Formação Em Tecnologia?. O total foi de: R$${SomaTotal15}`)
                        if(QuantidadeDeCursosCompradosVerificador15 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador15 = true
                            Verificador15 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador15= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados15} cursos sobre Formação Em Tecnologia, e gastou um total de: R$${SomaTotal15}`)
            }
            if(parseInt(CursoNaDnc[3]) == 1) {
                var QuantidadeDeCursosCompradosVerificador16 = true
                var Verificador16 = `S`
                while (QuantidadeDeCursosCompradosVerificador16 == true) {
                    while (Verificador16 == `S`) {
                    var QuantidadeDeCursosComprados16 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Dados, cada curso custa: R$20.000,00`)
                        if(isNaN(QuantidadeDeCursosComprados16) || QuantidadeDeCursosComprados16 <=0) {
                            alert(`Por favor digite somente números`)
                        } else {
                            Verificador16 = `N`
                        }
                    }
                    var SomaTotal16 = parseInt(QuantidadeDeCursosComprados16) * 20000
                    Soma = Soma + SomaTotal16
                    QuantidadeDeCursosCompradosVerificador16 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados16} cursos sobre Formação Em Dados?. O total foi de: R$${SomaTotal16}`)
                    if(QuantidadeDeCursosCompradosVerificador16 == false) {
                        alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                        QuantidadeDeCursosCompradosVerificador16 = true
                        Verificador16 = `S`
                    } else {
                        QuantidadeDeCursosCompradosVerificador16 = false
                    }
                }
                alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados16} cursos sobre Formação Em Dados, e gastou um total de: R$${SomaTotal16}`)
            } else if (parseInt(CursoNaDnc[3]) == 2) {
                var QuantidadeDeCursosCompradosVerificador17 = true
                    var Verificador17 = `S`
                    while (QuantidadeDeCursosCompradosVerificador17 == true) {
                        while (Verificador17 == `S`) {
                        var QuantidadeDeCursosComprados17 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Projetos, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados17) || QuantidadeDeCursosComprados17 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador17 = `N`
                            }
                        }
                        var SomaTotal17 = parseInt(QuantidadeDeCursosComprados17) * 15000
                        Soma = Soma + SomaTotal17
                        QuantidadeDeCursosCompradosVerificador17 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados17} cursos sobre Formação Em Projetos?. O total foi de: R$${SomaTotal17}`)
                        if(QuantidadeDeCursosCompradosVerificador17 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador17 = true
                            Verificador17 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador17 = false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados17} cursos sobre Formação Em Projetos, e gastou um total de: R$${SomaTotal17}`)
            } else if (parseInt(CursoNaDnc[3]) == 3) {
                var QuantidadeDeCursosCompradosVerificador18 = true
                    var Verificador18 = `S`
                    while (QuantidadeDeCursosCompradosVerificador18 == true) {
                        while (Verificador18 == `S`) {
                        var QuantidadeDeCursosComprados18 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Marketing, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados18) || QuantidadeDeCursosComprados18 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador18 = `N`
                            }
                        }
                        var SomaTotal18 = parseInt(QuantidadeDeCursosComprados18) * 13000
                        Soma = Soma + SomaTotal18
                        QuantidadeDeCursosCompradosVerificador18 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados18} cursos sobre Formação Em Marketing?. O total foi de: R$${SomaTotal18}`)
                        if(QuantidadeDeCursosCompradosVerificador18 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador18 = true
                            Verificador18 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador18= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados18} cursos sobre Formação Em Marketing, e gastou um total de: R$${SomaTotal18}`)
            } else if (parseInt(CursoNaDnc[3]) == 4) {
                var QuantidadeDeCursosCompradosVerificador19 = true
                    var Verificador19 = `S`
                    while (QuantidadeDeCursosCompradosVerificador19 == true) {
                        while (Verificador19 == `S`) {
                        var QuantidadeDeCursosComprados19 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Produto, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados19) || QuantidadeDeCursosComprados19 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador19 = `N`
                            }
                        }
                        var SomaTotal19 = parseInt(QuantidadeDeCursosComprados19) * 18000
                        Soma = Soma + SomaTotal19
                        QuantidadeDeCursosCompradosVerificador19 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados19} cursos sobre Formação Em Produto?. O total foi de: R$${SomaTotal19}`)
                        if(QuantidadeDeCursosCompradosVerificador19 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador19 = true
                            Verificador19 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador19= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados19} cursos sobre Formação Em Produto, e gastou um total de: R$${SomaTotal19}`)
            } else if (parseInt(CursoNaDnc[3]) == 5) {
                var QuantidadeDeCursosCompradosVerificador20 = true
                    var Verificador20 = `S`
                    while (QuantidadeDeCursosCompradosVerificador20 == true) {
                        while (Verificador20 == `S`) {
                        var QuantidadeDeCursosComprados20 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Tecnologia, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados20) || QuantidadeDeCursosComprados20 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador20 = `N`
                            }
                        }
                        var SomaTotal20 = parseInt(QuantidadeDeCursosComprados20) * 19000
                        Soma = Soma + SomaTotal20
                        QuantidadeDeCursosCompradosVerificador20 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados20} cursos sobre Formação Em Tecnologia?. O total foi de: R$${SomaTotal20}`)
                        if(QuantidadeDeCursosCompradosVerificador20 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador20 = true
                            Verificador20 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador20= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados20} cursos sobre Formação Em Tecnologia, e gastou um total de: R$${SomaTotal20}`)
            }
            if(parseInt(CursoNaDnc[4]) == 1) {
                var QuantidadeDeCursosCompradosVerificador21 = true
                var Verificador21 = `S`
                while (QuantidadeDeCursosCompradosVerificador21 == true) {
                    while (Verificador21 == `S`) {
                    var QuantidadeDeCursosComprados21 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Dados, cada curso custa: R$20.000,00`)
                        if(isNaN(QuantidadeDeCursosComprados21) || QuantidadeDeCursosComprados21 <=0) {
                            alert(`Por favor digite somente números`)
                        } else {
                            Verificador21 = `N`
                        }
                    }
                    var SomaTotal21 = parseInt(QuantidadeDeCursosComprados21) * 20000
                    Soma = Soma + SomaTotal21
                    QuantidadeDeCursosCompradosVerificador21 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados21} cursos sobre Formação Em Dados?. O total foi de: R$${SomaTotal21}`)
                    if(QuantidadeDeCursosCompradosVerificador21 == false) {
                        alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                        QuantidadeDeCursosCompradosVerificador21 = true
                        Verificador21 = `S`
                    } else {
                        QuantidadeDeCursosCompradosVerificador21 = false
                    }
                }
                alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados21} cursos sobre Formação Em Dados, e gastou um total de: R$${SomaTotal21}`)
            } else if (parseInt(CursoNaDnc[4]) == 2) {
                var QuantidadeDeCursosCompradosVerificador22 = true
                    var Verificador22 = `S`
                    while (QuantidadeDeCursosCompradosVerificador22 == true) {
                        while (Verificador22 == `S`) {
                        var QuantidadeDeCursosComprados22 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Projetos, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados22) || QuantidadeDeCursosComprados22 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador22 = `N`
                            }
                        }
                        var SomaTotal22 = parseInt(QuantidadeDeCursosComprados22) * 15000
                        Soma = Soma + SomaTotal22
                        QuantidadeDeCursosCompradosVerificador22 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados22} cursos sobre Formação Em Projetos?. O total foi de: R$${SomaTotal22}`)
                        if(QuantidadeDeCursosCompradosVerificador22 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador22 = true
                            Verificador22 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador22 = false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados22} cursos sobre Formação Em Projetos, e gastou um total de: R$${SomaTotal22}`)
            } else if (parseInt(CursoNaDnc[4]) == 3) {
                var QuantidadeDeCursosCompradosVerificador23 = true
                    var Verificador23 = `S`
                    while (QuantidadeDeCursosCompradosVerificador23 == true) {
                        while (Verificador23 == `S`) {
                        var QuantidadeDeCursosComprados23 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Marketing, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados23) || QuantidadeDeCursosComprados23 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador23 = `N`
                            }
                        }
                        var SomaTotal23 = parseInt(QuantidadeDeCursosComprados23) * 13000
                        Soma = Soma + SomaTotal23
                        QuantidadeDeCursosCompradosVerificador23 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados23} cursos sobre Formação Em Marketing?. O total foi de: R$${SomaTotal23}`)
                        if(QuantidadeDeCursosCompradosVerificador23 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador23 = true
                            Verificador23 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador23= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados23} cursos sobre Formação Em Marketing, e gastou um total de: R$${SomaTotal23}`)
            } else if (parseInt(CursoNaDnc[4]) == 4) {
                var QuantidadeDeCursosCompradosVerificador24 = true
                    var Verificador24 = `S`
                    while (QuantidadeDeCursosCompradosVerificador24 == true) {
                        while (Verificador24 == `S`) {
                        var QuantidadeDeCursosComprados24 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Produto, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados24) || QuantidadeDeCursosComprados24 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador24 = `N`
                            }
                        }
                        var SomaTotal24 = parseInt(QuantidadeDeCursosComprados24) * 18000
                        Soma = Soma + SomaTotal24
                        QuantidadeDeCursosCompradosVerificador24 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados24} cursos sobre Formação Em Produto?. O total foi de: R$${SomaTotal24}`)
                        if(QuantidadeDeCursosCompradosVerificador24 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador24 = true
                            Verificador24 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador24= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados24} cursos sobre Formação Em Produto, e gastou um total de: R$${SomaTotal24}`)
            } else if (parseInt(CursoNaDnc[4]) == 5) {
                var QuantidadeDeCursosCompradosVerificador25 = true
                    var Verificador25 = `S`
                    while (QuantidadeDeCursosCompradosVerificador25 == true) {
                        while (Verificador25 == `S`) {
                        var QuantidadeDeCursosComprados25 = prompt(`Quantos cursos o senhor deseja comprar sobre Formação Em Tecnologia, cada curso custa: R$15.000,00`)
                            if(isNaN(QuantidadeDeCursosComprados25) || QuantidadeDeCursosComprados25 <=0) {
                                alert(`Por favor digite somente números`)
                            } else {
                                Verificador25 = `N`
                            }
                        }
                        var SomaTotal25 = parseInt(QuantidadeDeCursosComprados25) * 19000
                        Soma = Soma + SomaTotal25
                        QuantidadeDeCursosCompradosVerificador25 = confirm(`O senhor confirma a compra de um total de: ${QuantidadeDeCursosComprados25} cursos sobre Formação Em Tecnologia?. O total foi de: R$${SomaTotal25}`)
                        if(QuantidadeDeCursosCompradosVerificador25 == false) {
                            alert(`Redirecionaremos o senhor para a tela de compra do curso novamente`)
                            QuantidadeDeCursosCompradosVerificador25 = true
                            Verificador25 = `S`
                        } else {
                            QuantidadeDeCursosCompradosVerificador25= false
                        }
                    }
                    alert(`O senhor comprou um total de: ${QuantidadeDeCursosComprados25} cursos sobre Formação Em Tecnologia, e gastou um total de: R$${SomaTotal25}`)
            }
            Verificador = confirm(`Deseja comprar mais algum curso?`)
            if(Verificador == false) {
                alert(`Agradecemos o seu feedback`)
                Continuar = `N`
                alert(`O senhor gastou um total de: R$${Soma}`)
            } else {
                alert(`Agradecemos o seu feedback`)
            }
        }
    }
}