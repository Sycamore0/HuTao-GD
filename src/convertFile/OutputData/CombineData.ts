import CombineExcelConfig from '#/ExcelBinOutput/CombineExcelConfig'
import CombineDataList from '$DT/CombineData'
import Writer from './writer'

export class CombineDataWriter extends Writer {
  declare data: CombineDataList

  constructor(ver: string) {
    super('CombineData', ver)
  }

  async generateData(): Promise<void> {
    const { version } = this

    const combineExcelConfigLoader = CombineExcelConfig(version)

    await combineExcelConfigLoader.load()

    this.data = combineExcelConfigLoader.data.map(combine => ({
      CombineId: combine.CombineId,
      PlayerLevel: combine.PlayerLevel,
      IsDefaultShow: combine.IsDefaultShow,
      CombineType: combine.CombineType,
      SubCombineType: combine.SubCombineType,
      ResultItemId: combine.ResultItemId,
      ResultItemCount: combine.ResultItemCount,
      ScoinCost: combine.ScoinCost,
      RandomItems: <{ Id: number, Count: number }[]>combine.RandomItems.filter(randomItems => randomItems.Count !== 0),
      MaterialItems: <{ Id: number, Count: number }[]>combine.MaterialItems.filter(materialItems => materialItems.Id !== 0 && materialItems.Count !== 0),
      RecipeType: combine.RecipeType
    }))
  }
}

export default (ver: string) => new CombineDataWriter(ver)