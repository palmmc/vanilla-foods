import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.HoneyBottle)
    .setIcon("honey_bottle")
    .setFood(6, true)
    .register();