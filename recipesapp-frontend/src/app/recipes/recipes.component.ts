import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  recipes: any[];
  recipeName: string = '';
  recipeImgUrl: string = '';
  recipeDesc: string = '';
  errorMessage: string = '';

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipesService.getRecipes()
      .pipe(
        catchError(error => {
          console.error('Error fetching recipes:', error);
          throw error;
        })
      )
      .subscribe(
        (recipes) => {
          this.recipes = recipes;
        }
      );
  }

  onSubmit() {
    if (!this.recipeName || !this.recipeImgUrl || !this.recipeDesc) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.recipesService.addRecipes(this.recipeName, this.recipeImgUrl, this.recipeDesc)
      .pipe(
        catchError(error => {
          console.error('Error adding recipe:', error);
          this.errorMessage = 'Failed to add recipe. Please try again.';
          throw error;
        })
      )
      .subscribe(
        () => {
          console.log('Recipe added successfully');
          this.recipeName = '';
          this.recipeImgUrl = '';
          this.recipeDesc = '';
          this.fetchRecipes();
        }
      );
  }

  deleteRecipe(recipeId: number) {
    this.recipesService.deleteRecipe(recipeId)
      .pipe(
        catchError(error => {
          console.error('Error deleting recipe:', error);
          throw error;
        })
      )
      .subscribe(
        () => {
          console.log('Recipe deleted successfully');
          this.fetchRecipes();
        }
      );
  }
}
