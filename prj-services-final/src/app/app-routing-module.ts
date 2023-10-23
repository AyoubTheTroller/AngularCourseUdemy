import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; // Import the ShoppingListComponent
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { PlaceholderComponent } from './recipes/place-holder.componen';

const appRoutes: Routes = [
  { path: "", redirectTo: '/recipes', pathMatch: 'full' },
  { path: "recipes", component: RecipesComponent,
    children: [
      { path: "", component: PlaceholderComponent},
      { path: ':id', component: RecipeDetailComponent }] },
   // Add the route for displaying a recipe detail
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
