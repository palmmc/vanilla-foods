import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Porkchop)
    .setIcon("porkchop_raw")
    .setFood(3)
    .register();