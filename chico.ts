/**
 * Chico Palha para micro:bit
 */

//% color=#D9A441 icon="\uf1ae" block="Chico Palha"
namespace chicoPalha {

    // =========================
    // 🌾 PERSONAGEM
    // =========================

    /**
     * Mostra Chico Palha.
     */
    //% block="mostrar Chico Palha"
    export function mostrarChicoPalha() {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            . # # # .
            # . # . #
        `)
    }

    /**
     * Chico Palha sorri.
     */
    //% block="Chico Palha sorrir"
    export function sorrir() {
        basic.showIcon(IconNames.Happy)
    }

    /**
     * Chico Palha fica confuso.
     */
    //% block="Chico Palha ficar confuso"
    export function confuso() {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . # .
            # . . . .
            . # # # .
        `)
    }

    /**
     * Mostra o visual do Chico Palha.
     */
    //% block="mostrar visual do Chico Palha"
    export function mostrarVisual() {
        mostrarChicoPalha()
    }


    // =========================
    // 🌽 FAZENDA E MILHARAL
    // =========================

    /**
     * Chico Palha vai para a fazenda.
     */
    //% block="Chico Palha vai para a fazenda"
    export function irParaFazenda() {
        basic.showString("FAZENDA")
    }

    /**
     * Mostra um milho.
     */
    //% block="mostrar milho"
    export function mostrarMilho() {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
        `)
    }

    /**
     * Mostra o céu estrelado.
     */
    //% block="mostrar céu estrelado"
    export function ceuEstrelado() {
        for (let i = 0; i < 3; i++) {
            basic.showLeds(`
                # . . . #
                . . # . .
                . # . # .
                . . # . .
                # . . . #
            `)

            basic.pause(400)

            basic.showLeds(`
                . # . # .
                . . # . .
                # . . . #
                . . # . .
                . # . # .
            `)

            basic.pause(400)
        }
    }


    // =========================
    // 🎪 ARRAIÁ
    // =========================

    /**
     * Inicia o Arraiá da Milharal.
     */
    //% block="iniciar Arraiá da Milharal"
    export function iniciarArraia() {
        basic.showString("ARRAIA!")
        basic.showIcon(IconNames.Heart)
    }

    /**
     * Toca uma música simples do arraial.
     */
    //% block="tocar música do arraial"
    export function musicaArraial() {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Half))
    }

    /**
     * Começa a dança final.
     */
    //% block="começar dança final"
    export function dancaFinal() {
        basic.showString("VAI!")
        dancar()
    }

    /**
     * Comemora no Arraiá.
     */
    //% block="comemorar no Arraiá"
    export function comemorarArraia() {
        for (let i = 0; i < 3; i++) {
            basic.showIcon(IconNames.Happy)
            basic.pause(250)

            basic.showIcon(IconNames.Heart)
            basic.pause(250)
        }
    }


    // =========================
    // 💭 PENSAMENTOS
    // =========================

    /**
     * Chico Palha pensa alguma coisa.
     */
    //% block="Chico Palha pensar $texto"
    //% texto.shadow=text
    export function pensar(texto: string) {
        basic.showString(texto)
    }

    /**
     * Chico Palha quer dançar.
     */
    //% block="Chico Palha quer dançar"
    export function querDancar() {
        basic.showString("QUERO DANCAR!")
    }


    // =========================
    // 👩‍🌾 MILHARINA E AMIGOS
    // =========================

    /**
     * Milharina chama Chico Palha.
     */
    //% block="Milharina chamar Chico Palha"
    export function milharinaChamar() {
        basic.showString("CHICO!")
    }

    /**
     * Forma pares para a dança.
     */
    //% block="formar pares"
    export function formarPares() {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
        `)
    }

    /**
     * Ensina um passo de dança.
     */
    //% block="ensinar passo de dança"
    export function ensinarPasso() {
        basic.showString("1 2 3")
    }


    // =========================
    // 🕺 DANÇA
    // =========================

    /**
     * Aprende um passo de dança.
     */
    //% block="aprender passo $passo"
    //% passo.shadow=text
    export function aprenderPasso(passo: string) {
        basic.showString(passo)
        basic.showIcon(IconNames.Yes)
    }

    /**
     * Chico Palha dá um giro.
     */
    //% block="Chico Palha dar giro"
    export function darGiro() {
        basic.showArrow(ArrowNames.North)
        basic.pause(200)

        basic.showArrow(ArrowNames.East)
        basic.pause(200)

        basic.showArrow(ArrowNames.South)
        basic.pause(200)

        basic.showArrow(ArrowNames.West)
        basic.pause(200)
    }

    /**
     * Chico Palha erra o passo.
     */
    //% block="Chico Palha errar o passo"
    export function errarPasso() {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.showIcon(IconNames.Confused)
    }

    /**
     * Comemora o aprendizado.
     */
    //% block="comemorar aprendizado"
    export function comemorarAprendizado() {
        basic.showIcon(IconNames.Yes)
        basic.pause(300)
        basic.showIcon(IconNames.Happy)
    }

    /**
     * Chico Palha dança.
     */
    //% block="Chico Palha dançar"
    export function dancar() {
        for (let i = 0; i < 4; i++) {

            basic.showLeds(`
                . # . # .
                . # # . .
                # # # # #
                . . # . .
                . # . # .
            `)

            basic.pause(300)

            basic.showLeds(`
                . # . # .
                . . # # .
                # # # # #
                . . # . .
                # . # . #
            `)

            basic.pause(300)
        }
    }

    /**
     * Chico Palha mostra seu gingado.
     */
    //% block="Chico Palha mostrar seu gingado"
    export function mostrarGingado() {
        dancar()
        darGiro()
        dancar()
        comemorarArraia()
    }


    // =========================
    // 📖 HISTÓRIA
    // =========================

    /**
     * Cena 1: Chico Palha na fazenda.
     */
    //% block="história capítulo 1 | Chico Palha na fazenda"
    export function capitulo1() {
        irParaFazenda()
        mostrarChicoPalha()
        sorrir()
    }

    /**
     * Cena 2: começa o Arraiá.
     */
    //% block="história capítulo 2 | começa o Arraiá"
    export function capitulo2() {
        iniciarArraia()
        ceuEstrelado()
        musicaArraial()
    }

    /**
     * Cena 3: Chico quer dançar.
     */
    //% block="história capítulo 3 | Chico quer dançar"
    export function capitulo3() {
        querDancar()
        confuso()
    }

    /**
     * Cena 4: Milharina ensina.
     */
    //% block="história capítulo 4 | Milharina ensina"
    export function capitulo4() {
        milharinaChamar()
        formarPares()
        ensinarPasso()
    }

    /**
     * Cena 5: Chico aprende.
     */
    //% block="história capítulo 5 | Chico aprende"
    export function capitulo5() {
        aprenderPasso("PASSO 1")
        aprenderPasso("PASSO 2")
        aprenderPasso("PASSO 3")
        darGiro()
        comemorarAprendizado()
    }

    /**
     * Cena 6: o grande final.
     */
    //% block="história capítulo 6 | o grande final"
    export function capitulo6() {
        dancaFinal()
        mostrarGingado()
        comemorarArraia()
    }

    /**
     * Conta a história completa.
     */
    //% block="▶ contar história completa do Chico Palha"
    export function historiaCompleta() {
        capitulo1()
        basic.pause(500)

        capitulo2()
        basic.pause(500)

        capitulo3()
        basic.pause(500)

        capitulo4()
        basic.pause(500)

        capitulo5()
        basic.pause(500)

        capitulo6()

        basic.showString("FIM!")
    }
}