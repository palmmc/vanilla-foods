import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.CookedSalmon)
    .setIcon("cooked_salmon")
    .setFood(6)
    .register();