import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.MelonSlice)
    .setIcon("melon")
    .setDisplayName("melon")
    .setFood(2, 0.6)
    .register();