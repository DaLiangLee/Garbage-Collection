import { TvShow } from './tv-show';

export class TvNetwork {
    id: number;
    name: string;
    tvShows: TvShow[];

    constructor(init?: Partial<TvNetwork>) {
        Object.assign(this, init);
    }
}
