import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  OracleUpdate,
  UpdaterAddressChange
} from "../generated/DIACoingeckoOracle/DIACoingeckoOracle"

export function createOracleUpdateEvent(
  key: string,
  value: BigInt,
  timestamp: BigInt
): OracleUpdate {
  let oracleUpdateEvent = changetype<OracleUpdate>(newMockEvent())

  oracleUpdateEvent.parameters = new Array()

  oracleUpdateEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  oracleUpdateEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  oracleUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return oracleUpdateEvent
}

export function createUpdaterAddressChangeEvent(
  newUpdater: Address
): UpdaterAddressChange {
  let updaterAddressChangeEvent = changetype<UpdaterAddressChange>(
    newMockEvent()
  )

  updaterAddressChangeEvent.parameters = new Array()

  updaterAddressChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newUpdater",
      ethereum.Value.fromAddress(newUpdater)
    )
  )

  return updaterAddressChangeEvent
}
