import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.RabbitStew)
    .setIcon("rabbit_stew")
    .setFood(10, 1.2)
    .register();