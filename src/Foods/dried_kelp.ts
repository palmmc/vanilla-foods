import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.DriedKelp)
    .setIcon("dried_kelp")
    .setFood(1, 0.2)
    .setUseModifiers(0.35, 0.85)
    .register();