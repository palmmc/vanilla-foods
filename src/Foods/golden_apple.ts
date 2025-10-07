import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.GoldenApple)
    .setIcon("apple_golden")
    .setFood(4, true)
    .register();