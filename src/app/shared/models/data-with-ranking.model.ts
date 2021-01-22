export class DataWithRanking <T>{
    result: T[];
    paginator : IPaginator
}
export interface IPaginator{
    SupplierId: string;
    SearchTerm: string;
    CategoryId:number;
    offset: number;
    limit: number;
}