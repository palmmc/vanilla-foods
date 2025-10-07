import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.GoldenCarrot)
    .setIcon("carrot_golden")
    .setFood(6, 2.4)
    .register();