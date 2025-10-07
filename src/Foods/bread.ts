import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Bread)
    .setIcon("bread")
    .setFood(5, false)
    .register();