import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.CookedMutton)
    .setIcon("mutton_cooked")
    .setFood(6)
    .register();