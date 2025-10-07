import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.EnchantedGoldenApple)
    .setIcon("apple_golden")
    .setDisplayName("appleEnchanted")
    .setFood(4, true)
    .register();