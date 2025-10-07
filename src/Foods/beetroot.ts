import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Beetroot)
    .setIcon("beetroot")
    .setFood(1, 1.2)
    .register();