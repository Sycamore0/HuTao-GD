import CookRecipeExcelConfigList from '$DT/ExcelBinOutput/CookRecipeExcelConfig'
import Reader from './reader'

export class CookRecipeExcelConfigReader extends Reader {
  declare data: CookRecipeExcelConfigList

  constructor(ver: string) {
    super('CookRecipeExcelConfigData', ver)
  }
}

export default (ver: string) => new CookRecipeExcelConfigReader(ver)