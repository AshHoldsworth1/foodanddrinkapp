﻿using FoodAndDrink.Api.Models;

namespace FoodAndDrink.Api
{
	public class MockData
	{
        private static List<Ingredient> ingredientList = new List<Ingredient>
            {
                new Ingredient("Beef"),
                new Ingredient("Potato"),
                new Ingredient("Onion"),
                new Ingredient("Beef Stock")
            };

        private static List<Ingredient> ingredientList1 = new List<Ingredient>
            {
                new Ingredient("Chicken"),
                new Ingredient("Bun"),
                new Ingredient("Cheese"),
                new Ingredient("Bacon")
            };

        private static Food[] foodList = new Food[]
            {
                new Food("Cottage Pie", 3, ingredientList, false, 2, 1, 2),
                new Food("Chicken Burger", 4, ingredientList1, true, 1, 1, 1),
                new Food("Beef Burger", 2, ingredientList, true, 1, 1, 1),
                new Food("Rocket Salad", 3, ingredientList1, true, 1, 1, 1),
                new Food("Sausage Pasta", 5, ingredientList, false, 2, 2, 2),
                new Food("Chicken & Sweet Pepper Pasta", 5, ingredientList1, false, 2, 2, 1),
                new Food("Lasagna", 3, ingredientList, false, 2, 2, 3),
                new Food("Cous Cous & Roasted Vegetables", 4, ingredientList1, true, 2, 1, 2),
                new Food("Spaghetti Bolognese", 3, ingredientList, true, 2, 1, 2),
                new Food("BBQ Chicken & Chips", 5, ingredientList1, true, 2, 2, 2),
                new Food("Slow Cooker Gammon", 5, ingredientList, false, 1, 2, 3),
                new Food("Lamb Steaks", 4, ingredientList1, true, 2, 3, 1)
            };

        public static Food[] GetFoodList()
        {
            return foodList;
        }

        public static Food GetFoodItem(int consumableId)
        {
            Console.Write($"ConsumableId: {consumableId}");
            //Food consumable = foodList.Find(foodList, element => element.Id == consumableId);

            return new Food("Cottage Pie", 3, ingredientList, false, 2, 1, 2);
        }
	}
}

