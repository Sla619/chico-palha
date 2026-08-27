/**
 * Chico Palha para micro:bit
 */

//% color=#D9A441 icon="\uf1ae" block="Chico Palha"
namespace chicoPalha {

    // =========================
    // 🌾 PERSONAGEM
    // =========================

    //% block="mostrar Chico Palha"
    //% group="Personagem"
    export function mostrarChicoPalha() {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            . # # # .
            # . # . #
        `)
    }

    //% block="Chico Palha sorrir"
    //% group="Personagem"
    export function sorrir() {
        basic.showIcon(IconNames.Happy)
    }

    //% block="Chico Palha ficar confuso"
    //% group="Personagem"
    export function confuso() {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . # .
            # . . . .
            . # # # .
        `)
    }

    //% block="mostrar visual do Chico Palha"
    //% group="Personagem"
    export function mostrarVisual() {
        mostrarChicoPalha()
    }

    //% block="Chico Palha pensar $texto"
    //% texto.shadow=text
    //% group="Personagem"
    export function pensar(texto: string) {
        basic.showString(texto)
    }

    //% block="Chico Palha quer dançar"
    //% group="Personagem"
    export function querDancar() {
        basic.showString("QUERO DANCAR!")
    }


    // =========================
    // 🌽 FAZENDA
    // =========================

    //% block="Chico Palha vai para a fazenda"
    //% group="Fazenda"
    export function irParaFazenda() {
        basic.showString("FAZENDA")
    }

    //% block="mostrar milho"
    //% group="Fazenda"
    export function mostrarMilho() {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
        `)
    }

    //% block="mostrar céu estrelado"
    //% group="Fazenda"
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

    //% block="iniciar Arraiá da Milharal"
    //% group="Arraiá"
    export function iniciarArraia() {
        basic.showString("ARRAIA!")
        basic.showIcon(IconNames.Heart)
    }

    //% block="tocar música do arraial"
    //% group="Arraiá"
    export function musicaArraial() {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Half))
    }

    //% block="começar dança final"
    //% group="Arraiá"
    export function dancaFinal() {
        basic.showString("VAI!")
        dancar()
    }

    //% block="comemorar no Arraiá"
    //% group="Arraiá"
    export function comemorarArraia() {
        for (let i = 0; i < 3; i++) {
            basic.showIcon(IconNames.Happy)
            basic.pause(250)

            basic.showIcon(IconNames.Heart)
            basic.pause(250)
        }
    }


    // =========================
    // 🕺 DANÇA
    // =========================

    //% block="ensinar passo de dança"
    //% group="Dança"
    export function ensinarPasso() {
        basic.showString("1 2 3")
    }

    //% block="aprender passo $passo"
    //% passo.shadow=text
    //% group="Dança"
    export function aprenderPasso(passo: string) {
        basic.showString(passo)
        basic.showIcon(IconNames.Yes)
    }

    //% block="Chico Palha dar giro"
    //% group="Dança"
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

    //% block="Chico Palha errar o passo"
    //% group="Dança"
    export function errarPasso() {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.showIcon(IconNames.Confused)
    }

    //% block="comemorar aprendizado"
    //% group="Dança"
    export function comemorarAprendizado() {
        basic.showIcon(IconNames.Yes)
        basic.pause(300)
        basic.showIcon(IconNames.Happy)
    }

    //% block="Chico Palha dançar"
    //% group="Dança"
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

    //% block="Chico Palha mostrar seu gingado"
    //% group="Dança"
    export function mostrarGingado() {
        dancar()
        darGiro()
        dancar()
        comemorarArraia()
    }


    // =========================
    // 👩‍🌾 AMIGOS
    // =========================

    //% block="Milharina chamar Chico Palha"
    //% group="Amigos"
    export function milharinaChamar() {
        basic.showString("CHICO!")
    }

    //% block="formar pares"
    //% group="Amigos"
    export function formarPares() {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
        `)
    }


    // =========================
    // 📖 HISTÓRIA
    // =========================

    //% block="história capítulo 1 | Chico Palha na fazenda"
    //% group="História"
    export function capitulo1() {
        irParaFazenda()
        mostrarChicoPalha()
        sorrir()
    }

    //% block="história capítulo 2 | começa o Arraiá"
    //% group="História"
    export function capitulo2() {
        iniciarArraia()
        ceuEstrelado()
        musicaArraial()
    }

    //% block="história capítulo 3 | Chico quer dançar"
    //% group="História"
    export function capitulo3() {
        querDancar()
        confuso()
    }

    //% block="história capítulo 4 | Milharina ensina"
    //% group="História"
    export function capitulo4() {
        milharinaChamar()
        formarPares()
        ensinarPasso()
    }

    //% block="história capítulo 5 | Chico aprende"
    //% group="História"
    export function capitulo5() {
        aprenderPasso("PASSO 1")
        aprenderPasso("PASSO 2")
        aprenderPasso("PASSO 3")
        darGiro()
        comemorarAprendizado()
    }

    //% block="história capítulo 6 | o grande final"
    //% group="História"
    export function capitulo6() {
        dancaFinal()
        mostrarGingado()
        comemorarArraia()
    }

    //% block="▶ contar história completa do Chico Palha"
    //% group="História"
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