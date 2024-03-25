import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipesService {
    private recipes = [
        {
            id: 1,
            name: 'Easy Rich Chocolate Cake Recipe',
            imgUrl: 'https://cakesbymk.com/wp-content/uploads/2023/05/Template-Size-for-Blog-Photos-25.jpg',
            desc: 'If youre looking for a rich chocolate cake recipe that comes together using only cocoa powder!'
        },
        {
            id: 2,
            name: 'Homemade Pepperoni Pizza',
            imgUrl: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg',
            desc: 'This Homemade Pepperoni Pizza has everything you want!'
        },
        {
            id: 3,
            name: 'Hamburger',
            imgUrl: 'https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1.jpg',
            desc: 'Best Hamburger Patty Recipe!'
        },
        {
            id: 4,
            name: 'Old-Fashioned Apple Pie',
            imgUrl: 'https://www.southernliving.com/thmb/bbDY1d_ySIrCFcq8WNBkR-3x6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246.jpg',
            desc: 'This double-crust apple pie is the perfect way to welcome fall!'
        }
    ];

    getRecipes() {
        return this.recipes;
    }
    
    addRecipe(name: string, imgUrl: string, desc: string) {
        const id = this.generateUniqueId();
        const newRecipe = {id, name, imgUrl, desc};
        this.recipes.push(newRecipe);
    }

    private generateUniqueId(): number {
        return this.recipes.length + 1;
    }

    deleteRecipe(recipeId: number) {
        const index = this.recipes.findIndex(recipe => recipe.id === recipeId);
        if (index !== -1) {
            this.recipes.splice(index, 1);
        }
    }

}
