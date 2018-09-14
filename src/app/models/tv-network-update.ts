import { TvShow } from './tv-show';

export class TvNetworkUpdate {
    name: string;
    tvShows: TvShow[];

    constructor(init?: Partial<TvNetworkUpdate>) {
        Object.assign(this, init);
    }
}
