import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private apiUrl = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) {}

    getRecipes(): Observable<any[]> {
        return this.httpClient.get<any[]>(`${this.apiUrl}/recipes`);
    }

    addRecipes(name: string, imgUrl: string, desc: string): Observable<any> {
        const recipeData = {name, imgUrl, desc};
        return this.httpClient.post(`${this.apiUrl}/recipes/add`, recipeData);
    }

    deleteRecipe(recipeId: number): Observable<any> {
        return this.httpClient.delete(`${this.apiUrl}/recipes/${recipeId}`);
    }    
}
