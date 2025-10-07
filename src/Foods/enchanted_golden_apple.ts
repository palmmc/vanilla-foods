import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.EnchantedGoldenApple)
    .setIcon("apple_golden")
    .setDisplayName("appleEnchanted")
    .setFood(4, 2.4, true)
    .setEffects(
        [
            {
                name: "Regeneration",
                chance: 1.0,
                duration: 30,
                amplifier: 1
            },
            {
                name: "Absorption",
                chance: 1.0,
                duration: 120,
                amplifier: 3
            },
            {
                name: "Resistance",
                chance: 1.0,
                duration: 300,
                amplifier: 0
            },
            {
                name: "FireResistance",
                chance: 1.0,
                duration: 300,
                amplifier: 0
            }
        ]
    )
    .register();