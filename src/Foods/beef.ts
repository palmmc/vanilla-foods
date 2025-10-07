import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Beef)
    .setIcon("beef_raw")
    .setFood(3, 0.6)
    .register();