import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Carrot)
    .setIcon("carrot")
    .setFood(3)
    .register();