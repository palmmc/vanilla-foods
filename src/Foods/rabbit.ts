import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Rabbit)
    .setIcon("rabbit")
    .setFood(3, 0.6)
    .register();