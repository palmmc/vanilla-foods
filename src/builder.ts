import { ItemIdentifier, ItemStackFoodTrait, ItemType } from "@serenityjs/core";
import { EffectType } from "@serenityjs/protocol";

class FoodBehaviorBuilder {
    private static foods: FoodBehaviorBuilder[] = [];

    public static registerAll() {
        for (const { identifier, icon, displayNameOverride, nutrition, saturationModifier, usingConvertsTo, effects, canAlwaysEat, movementModifier, useDuration, foil } of this.foods) {
            const type = ItemType.get(identifier);
            if (!type) {
                throw new Error(`Item type not found while registering food: ${identifier}`);
            }
            // Register component data.
            type.setIsComponentBased(true);
            type.components.setDisplayName(`item.${displayNameOverride || identifier.slice(identifier.lastIndexOf(":") + 1)}.name`)
            type.components.setIcon({ default: icon });
            //@ts-ignore
            type.components.setFood({ nutrition, can_always_eat: canAlwaysEat, saturation_modifier: saturationModifier, using_converts_to: usingConvertsTo, effects });
            type.components.setUseAnimation("eat");
            type.components.setUseModifiers({ movement_modifier: movementModifier, use_duration: useDuration });
            // Current not implemented, not possible in serenity.
            //if (foil) type.components.setFoil(true);
            // Register food trait.
            type.registerTrait(ItemStackFoodTrait);
        }
    }

    private identifier: string;
    private displayNameOverride: string | undefined;
    private icon: string;
    private nutrition!: number;
    private saturationModifier!: number;
    private usingConvertsTo: ItemType | undefined
    private effects: { name: keyof typeof EffectType; chance: number; duration: number; amplifier: number }[] | undefined;
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

    public setFood(nutrition: number, saturationModifier: number, canAlwaysEat: boolean = false) {
        this.nutrition = nutrition;
        this.saturationModifier = saturationModifier;
        this.canAlwaysEat = canAlwaysEat;
        return this;
    }

    public setUsingConvertsTo(item: string | ItemIdentifier | ItemType) {
        if (item instanceof ItemType) {
            this.usingConvertsTo = item;
        } else {
            const type = ItemType.get(item)!;
            this.usingConvertsTo = type;
        }
    }

    public setEffects(effects: { name: keyof typeof EffectType; chance: number; duration: number; amplifier: number }[]) {
        this.effects = effects;
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
        if (this.saturationModifier === undefined) {
            throw new Error(`Saturation modifier undefined for food item: ${this.identifier}`);
        }
        FoodBehaviorBuilder.foods.push(this);
    }
}

export { FoodBehaviorBuilder };