import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Pufferfish)
    .setIcon("pufferfish")
    .setFood(1, 0.2, true)
    .setEffects([
        {
            name: "Poison",
            chance: 1,
            duration: 60,
            amplifier: 1
        },
        {
            name: "Nausea",
            chance: 1,
            duration: 15,
            amplifier: 0
        },
        {
            name: "Hunger",
            chance: 1,
            duration: 15,
            amplifier: 2
        }
    ])
    .register();