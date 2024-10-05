export interface CookBonusExcelConfig {
  AvatarId: number
  RecipeId: number
  BonusType: string
  ParamVec: number[]
  ComplexParamVec: number[]
}

type CookBonusExcelConfigList = CookBonusExcelConfig[]

export default CookBonusExcelConfigList