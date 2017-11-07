interface MovieInterface{
    id: number;
    title: string;
    description: string;
    genreIds: Array<number>;
    releaseAt: string;
    language: string;
    imagePath: string;
}