import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.RottenFlesh)
    .setIcon("rotten_flesh")
    .setFood(4)
    .register();