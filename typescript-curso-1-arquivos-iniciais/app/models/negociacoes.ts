import { Negociacao } from './negociacao.js';

export class Negociacoes {

    //modelo longo
    // private negociacoes: Array<Negociacao> = [];

    //modelo curto
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // usando modificaor longo declaramos assim o read
    // lista(): ReadonlyArray<Negociacao> {

    // usando o modificador curto
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

