import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.CookedBeef)
    .setIcon("beef_cooked")
    .setFood(8)
    .register();