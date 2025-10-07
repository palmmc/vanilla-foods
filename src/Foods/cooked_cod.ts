import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.CookedCod)
    .setIcon("cooked_fish")
    .setFood(5, 1.2)
    .register();