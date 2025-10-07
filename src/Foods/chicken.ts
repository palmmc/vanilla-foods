import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Chicken)
    .setIcon("chicken_raw")
    .setFood(2)
    .register();