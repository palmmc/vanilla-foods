import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.SpiderEye)
    .setIcon("spider_eye")
    .setFood(2, 0.2, true)
    .setEffects([
        {
            name: "Poison",
            chance: 1.0,
            duration: 5,
            amplifier: 0
        }
    ]
    )
    .register();