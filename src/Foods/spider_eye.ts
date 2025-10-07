import { ItemIdentifier } from "@serenityjs/core";
import { FoodBehaviorBuilder } from "../builder";

new FoodBehaviorBuilder(ItemIdentifier.SpiderEye)
    .setIcon("spider_eye")
    .setFood(2, true)
    .register();