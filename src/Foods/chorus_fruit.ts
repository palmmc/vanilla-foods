import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.ChorusFruit)
    .setIcon("chorus_fruit")
    .setFood(4, true)
    .register();