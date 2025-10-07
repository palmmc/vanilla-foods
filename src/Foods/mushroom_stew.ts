import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.MushroomStew)
    .setIcon("mushroom_stew")
    .setFood(6)
    .register();