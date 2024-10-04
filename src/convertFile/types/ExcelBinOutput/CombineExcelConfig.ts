export interface CombineExcelConfig {
  CombineId: number
  PlayerLevel: number
  IsDefaultShow: boolean
  CombineType: number
  SubCombineType: number
  ResultItemId: number
  ResultItemCount: number
  ScoinCost?: number
  RandomItems: {
    Count: number
  }[]
  MaterialItems: {
    Id: number
    Count: number
  }[]
  RecipeType: string
}

type CombineExcelConfigList = CombineExcelConfig[]

export default CombineExcelConfigList