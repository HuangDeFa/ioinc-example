export class ArticleEntity{
    errorCode:number
    errorMsg:string
    data:ArticleData
}

class ArticleData{
    curPage:number
    datas:Array<any>
}