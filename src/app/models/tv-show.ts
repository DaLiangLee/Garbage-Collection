export class TvShow {
    id: number;
    name: string;
    tvNetworkId: number;

    constructor(init?: Partial<TvShow>) {
        Object.assign(this, init);
    }
}
