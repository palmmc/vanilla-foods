import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.GoldenApple)
    .setIcon("apple_golden")
    .setFood(4, 2.4, true)
    .setEffects([
        {
            name: "Regeneration",
            chance: 1.0,
            duration: 5,
            amplifier: 1
        },
        {
            name: "Absorption",
            chance: 1.0,
            duration: 120,
            amplifier: 0
        }
    ])
    .register();