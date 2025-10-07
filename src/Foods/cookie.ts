import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.Cookie)
    .setIcon("cookie")
    .setFood(2)
    .register();