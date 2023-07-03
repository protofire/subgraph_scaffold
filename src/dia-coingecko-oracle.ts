import {
  OracleUpdate as OracleUpdateEvent,
  UpdaterAddressChange as UpdaterAddressChangeEvent
} from "../generated/DIACoingeckoOracle/DIACoingeckoOracle"
import { OracleUpdate, UpdaterAddressChange } from "../generated/schema"

export function handleOracleUpdate(event: OracleUpdateEvent): void {
  let entity = new OracleUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.value = event.params.value
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdaterAddressChange(
  event: UpdaterAddressChangeEvent
): void {
  let entity = new UpdaterAddressChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newUpdater = event.params.newUpdater

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
