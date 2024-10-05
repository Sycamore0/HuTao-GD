export interface CookRecipeExcelConfig {
  Id: number
  FoodType: string
  CookMethod: string
  IsDefaultUnlocked: boolean
  MaxProficiency: number
  QualityOutputVec: {
    id?: number
    count?: number
  }[]
  InputVec: {
    id?: number
    count?: number
  }[]

  RankLevel?: number
  Icon?: string
  NameTextMapHash?: number
  DescTextMapHash?: number
  EffectDesc?: number[]
  QteParam?: string
  QteQualityWeightVec?: number[]
}

type CookRecipeExcelConfigList = CookRecipeExcelConfig[]

export default CookRecipeExcelConfigList