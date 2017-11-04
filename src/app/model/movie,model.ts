export class Movie {
    private _adult: boolean;
    private _backdrop_path: string | null;
    private _genre_ids: Array<number>;
    private _id: number;
    private _original_language: string;
    private _original_title: string;
    private _overview: string;
    private _popularity: number;
    private _poster_path: string | null;
    private _realise_date: string;
    private _title: string;
    private _video: boolean;
    private _vote_average: number;
    private _vote_count: number;

    get vote_count() {
        return this._vote_count;
    }

    set vote_count(value) {
        this._vote_count = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get realise_date() {
        return this._realise_date;
    }

    set realise_date(value) {
        this._realise_date = value;
    }

    get poster_path() {
        return this._poster_path;
    }

    set poster_path(value) {
        this._poster_path = value;
    }

    get popularity() {
        return this._popularity;
    }

    set popularity(value) {
        this._popularity = value;
    }

    get overview() {
        return this._overview;
    }

    set overview(value) {
        this._overview = value;
    }

    get original_title() {
        return this._original_title;
    }

    set original_title(value) {
        this._original_title = value;
    }

    get original_language() {
        return this._original_language;
    }

    set original_language(value) {
        this._original_language = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get genre_ids() {
        return this._genre_ids;
    }

    set genre_ids(value) {
        this._genre_ids = value;
    }

    get backdrop_path() {
        return this._backdrop_path;
    }

    set backdrop_path(value) {
        this._backdrop_path = value;
    }

    get adult() {
        return this._adult;
    }

    set adult(value) {
        this._adult = value;
    }

    get video() {
        return this._video;
    }

    set video(value) {
        this._video = value;
    }

    get vote_average() {
        return this._vote_average;
    }

    set vote_average(value) {
        this._vote_average = value;
    }
}