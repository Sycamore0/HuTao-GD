import CookRecipeExcelConfig from "#/ExcelBinOutput/CookRecipeExcelConfig";
import CookBonusExcelConfig from "#/ExcelBinOutput/CookBonusExcelConfig";
import CookDataGroup from "$DT/CookData";
import Writer from './writer'

export class CookDataWriter extends Writer {
    declare data: CookDataGroup

    constructor(ver: string) {
        super('CookData', ver)
    }

    async generateData(): Promise<void> {
        this.data = {
            Recipe: [],
            Bonus: []
        }

        const { version, data } = this

        const cookRecipeExcelConfigLoader = CookRecipeExcelConfig(version)
        const cookBonusExcelConfigLoader = CookBonusExcelConfig(version)

        await cookRecipeExcelConfigLoader.load()
        await cookBonusExcelConfigLoader.load()

        const { data: cookRecipeExcelConfig } = cookRecipeExcelConfigLoader
        const { data: cookBonusExcelConfig } = cookBonusExcelConfigLoader

        for (let recipe of cookRecipeExcelConfig) {
            const { Id, FoodType, CookMethod, IsDefaultUnlocked, MaxProficiency, Icon, NameTextMapHash, DescTextMapHash, QteParam, QualityOutputVec, RankLevel, EffectDesc, QteQualityWeightVec } = recipe
            data.Recipe.push({
                Id,
                FoodType,
                CookMethod,
                IsDefaultUnlocked,
                MaxProficiency,
                QualityOutputVec,
                InputVec: [],
                RankLevel,
                Icon,
                NameTextMapHash,
                DescTextMapHash,
                EffectDesc,
                QteParam,
                QteQualityWeightVec
            })
        }

        for (let bonus of cookBonusExcelConfig) {
            const { RecipeId, AvatarId, BonusType, ParamVec, ComplexParamVec } = bonus
            data.Bonus.push({
                RecipeId,
                AvatarId,
                BonusType,
                ParamVec,
                ComplexParamVec
            })
        }

    }
}

export default (ver: string) => new CookDataWriter(ver)