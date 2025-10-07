import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Mutton)
    .setIcon("mutton_raw")
    .setFood(2)
    .register();