import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.PoisonousPotato)
    .setIcon("potato_poisonous")
    .setFood(2, 0.6, true)
    .setEffects(
        [
            {
                name: "Poison",
                chance: 0.6,
                duration: 5,
                amplifier: 0
            }
        ]
    )
    .register();