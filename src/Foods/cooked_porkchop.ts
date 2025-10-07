import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.CookedPorkchop)
    .setIcon("porkchop_cooked")
    .setFood(8)
    .register();