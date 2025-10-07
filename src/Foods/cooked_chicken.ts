import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.CookedChicken)
    .setIcon("chicken_cooked")
    .setFood(6)
    .register();