import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.GlowBerries)
    .setIcon("glow_berries")
    .setFood(2, 0.2)
    .register();