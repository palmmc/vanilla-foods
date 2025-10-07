import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.TropicalFish)
    .setIcon("tropical_fish")
    .setDisplayName("clownfish")
    .setFood(1, 0.2)
    .register();