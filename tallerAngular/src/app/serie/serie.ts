export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    website: string;
    poster: string;


    public constructor(...args: any[]) {
        if (args.length === 7) {
            this.id = args[0];
            this.name = args[1];
            this.channel = args[2];
            this.seasons = args[3];
            this.description = args[4];
            this.website = args[5];
            this.poster = args[6];
        } else if (args.length === 3) {
            this.id = 0;
            this.name = args[0];
            this.channel = args[1];
            this.seasons = args[2];
            this.description = '';
            this.website = '';
            this.poster = '';
        } else {
            this.id = 0;
            this.name = '';
            this.channel = '';
            this.seasons = 0;
            this.description = '';
            this.website = '';
            this.poster = '';
        }
    }
}
