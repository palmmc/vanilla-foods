import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.CookedRabbit)
    .setIcon("rabbit_cooked")
    .setFood(5)
    .register();