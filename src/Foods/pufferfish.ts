import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Pufferfish)
    .setIcon("pufferfish")
    .setFood(1, true)
    .register();