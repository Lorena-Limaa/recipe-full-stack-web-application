import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
    constructor(private recipesService: RecipesService) {}

    @Get()
    fetchRecipes() {
        return this.recipesService.getRecipes();
    }

    @Post('add')
    async addRecipe(
        @Body('name') name: string,
        @Body('imgUrl') imgUrl: string,
        @Body('desc') desc: string
    ) {
        try {
            const result = await this.recipesService.addRecipe(name, imgUrl, desc);
            return {message: 'Recipe added successfully', recipe: result};
        } catch (error) {
            return {message: 'Failed to add recipe', error: error.message};
        }
    }

    @Delete(':id')
    deleteRecipe(@Param('id') id: number) {
        this.recipesService.deleteRecipe(+id);
        return { message: 'Recipe deleted successfully' };
    }
    
}
