import CookBonusExcelConfigList from '$DT/ExcelBinOutput/CookBonusExcelConfig'
import Reader from './reader'

export class CookBonusExcelConfigReader extends Reader {
  declare data: CookBonusExcelConfigList

  constructor(ver: string) {
    super('CookBonusExcelConfigData', ver)
  }
}

export default (ver: string) => new CookBonusExcelConfigReader(ver)