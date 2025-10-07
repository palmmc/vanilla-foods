import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.PoisonousPotato)
    .setIcon("potato_poisonous")
    .setFood(2, true)
    .register();