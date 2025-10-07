import { ItemType } from "@serenityjs/core";

class FoodBehaviorBuilder {
    private static foods: FoodBehaviorBuilder[] = [];

    public static registerAll() {
        for (const { identifier, icon, displayNameOverride, nutrition, canAlwaysEat, movementModifier, useDuration } of this.foods) {
            const type = ItemType.get(identifier);
            if (!type) {
                throw new Error(`Item type not found while registering food: ${identifier}`);
            }
            type.setIsComponentBased(true);
            type.components.setDisplayName(`item.${displayNameOverride || identifier.slice(identifier.lastIndexOf(":") + 1)}.name`)
            type.components.setIcon({ default: icon });
            type.components.setFood({ nutrition, can_always_eat: canAlwaysEat });
            type.components.setUseAnimation("eat");
            type.components.setUseModifiers({ movement_modifier: movementModifier, use_duration: useDuration });
            // Unimplemented currently, hopefully will be supported later for egaps.
            //if (this.foil) type.components.setFoil(true);
        }
    }

    private identifier: string;
    private displayNameOverride: string | undefined;
    private icon: string;
    private nutrition!: number;
    private canAlwaysEat: boolean = false;
    private movementModifier: number = 0.35;
    private useDuration: number = 1.6;
    private foil: boolean = false;

    constructor(identifier: string) {
        this.identifier = identifier;
        this.icon = identifier;
    }

    public setIcon(icon: string) {
        this.icon = icon;
        return this;
    }

    public setDisplayName(displayName: string) {
        this.displayNameOverride = displayName;
        return this;
    }

    public setFood(nutrition: number, canAlwaysEat: boolean = false) {
        this.nutrition = nutrition;
        this.canAlwaysEat = canAlwaysEat;
        return this;
    }

    public setUseModifiers(movementModifier: number = 0.35, useDuration: number = 1.6) {
        this.movementModifier = movementModifier;
        this.useDuration = useDuration;
        return this;
    }

    public setFoil(foil: boolean) {
        this.foil = foil;
        return this;
    }

    public register() {
        if (this.nutrition === undefined) {
            throw new Error(`Nutrition value undefined for food item: ${this.identifier}`);
        }
        FoodBehaviorBuilder.foods.push(this);
    }
}

export { FoodBehaviorBuilder };