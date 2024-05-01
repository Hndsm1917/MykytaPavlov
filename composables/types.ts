export interface DeviceParams {
  name: string
  width: number
  height: number
  minWidth: number
  minHeight: number
  fontSize: number
  maxWidth: number | null
}

export interface ProjectParams {
  [key: string]: DeviceParams
}
