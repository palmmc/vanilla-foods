import { Plugin, PluginEvents } from "@serenityjs/plugins";
import { FoodBehaviorBuilder } from "./builder";
import "./Foods";
import { PlayerStartUsingItemSignal } from "@serenityjs/core";

class VanillaFoodsPlugin extends Plugin implements PluginEvents {

  public constructor() {
    super("vanilla-foods", "1.0.0");
  }

  public onInitialize(): void {
    FoodBehaviorBuilder.registerAll();
    this.logger.info("Vanilla food behavior has been registered!");
  }
}

export default new VanillaFoodsPlugin();
