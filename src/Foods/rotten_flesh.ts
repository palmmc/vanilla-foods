import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.RottenFlesh)
    .setIcon("rotten_flesh")
    .setFood(4, 0.2)
    .setEffects(
        [
            {
                name: "Hunger",
                chance: 0.8,
                duration: 30,
                amplifier: 0
            }
        ]
    )
    .register();