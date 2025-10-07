import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.PumpkinPie)
    .setIcon("pumpkin_pie")
    .setFood(8)
    .register();