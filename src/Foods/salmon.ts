import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Salmon)
    .setIcon("salmon")
    .setFood(2)
    .register();