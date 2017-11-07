export class Movie implements MovieInterface{
    private _id: number;
    private _title: string;
    private _description: string;
    private _genreIds: number[];
    private _releaseAt: string;
    private _language: string;
    private _imagePath: string;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get genreIds(): number[] {
        return this._genreIds;
    }

    set genreIds(value: number[]) {
        this._genreIds = value;
    }

    get releaseAt(): string {
        return this._releaseAt;
    }

    set releaseAt(value: string) {
        this._releaseAt = value;
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }

    get imagePath(): string {
        return this._imagePath;
    }

    set imagePath(value: string) {
        this._imagePath = value;
    }
}