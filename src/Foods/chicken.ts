import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Chicken)
    .setIcon("chicken_raw")
    .setFood(2, 0.6)
    .setEffects([
        {
            name: "Hunger",
            chance: 0.3,
            duration: 30,
            amplifier: 0
        }
    ])
    .register();