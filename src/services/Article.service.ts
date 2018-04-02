import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ArticleEntity } from "../bean/Article";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs/observable/of";


@Injectable()
export class ArticleService{
    
        articleUrl:string ="http://www.wanandroid.com/article/list/0/json"
       constructor(private http:HttpClient){

       }
       
       getArticle():Observable<ArticleEntity>{
          return this.http.get<ArticleEntity>(this.articleUrl).pipe(this.handleError<ArticleEntity>("getArticle"))
       }

       handleError<T>(operation ="operation", result?:T){
          return (error:any):Observable<T>=>{
              return of(result as T);
          }
       }
}