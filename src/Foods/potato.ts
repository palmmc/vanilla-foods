import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Potato)
    .setIcon("potato")
    .setFood(1, 0.6)
    .register();