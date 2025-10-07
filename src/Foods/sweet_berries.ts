import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.SweetBerries)
    .setIcon("sweet_berries")
    .setFood(2, 0.2)
    .register();