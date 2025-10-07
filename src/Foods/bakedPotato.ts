import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.BakedPotato)
    .setIcon("baked_potato")
    .setFood(5, 1.2)
    .register();
