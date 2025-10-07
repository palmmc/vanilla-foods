import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.BeetrootSoup)
    .setIcon("beetroot_soup")
    .setFood(6, 1.2)
    .register();