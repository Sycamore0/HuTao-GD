import CombineExcelConfigList from '$DT/ExcelBinOutput/CombineExcelConfig'
import Reader from './reader'

export class CombineExcelConfigReader extends Reader {
  declare data: CombineExcelConfigList

  constructor(ver: string) {
    super('CombineExcelConfigData', ver)
  }
}

export default (ver: string) => new CombineExcelConfigReader(ver)