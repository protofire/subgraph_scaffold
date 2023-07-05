import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  OwnershipTransferred,
  PathsUpdated,
  Paused,
  SetBuyBackAddress,
  SetDiceModulus,
  SetIsEarnable,
  SetSettings,
  SetUniRouterAddress,
  SetWethToAvaRouterAddress,
  Transfer,
  Unpaused
} from "../generated/AVaultPCS/AVaultPCS"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPathsUpdatedEvent(): PathsUpdated {
  let pathsUpdatedEvent = changetype<PathsUpdated>(newMockEvent())

  pathsUpdatedEvent.parameters = new Array()

  return pathsUpdatedEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createSetBuyBackAddressEvent(
  _buyBackAddress: Address
): SetBuyBackAddress {
  let setBuyBackAddressEvent = changetype<SetBuyBackAddress>(newMockEvent())

  setBuyBackAddressEvent.parameters = new Array()

  setBuyBackAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_buyBackAddress",
      ethereum.Value.fromAddress(_buyBackAddress)
    )
  )

  return setBuyBackAddressEvent
}

export function createSetDiceModulusEvent(
  _diceModulus: BigInt
): SetDiceModulus {
  let setDiceModulusEvent = changetype<SetDiceModulus>(newMockEvent())

  setDiceModulusEvent.parameters = new Array()

  setDiceModulusEvent.parameters.push(
    new ethereum.EventParam(
      "_diceModulus",
      ethereum.Value.fromUnsignedBigInt(_diceModulus)
    )
  )

  return setDiceModulusEvent
}

export function createSetIsEarnableEvent(_isEarnable: boolean): SetIsEarnable {
  let setIsEarnableEvent = changetype<SetIsEarnable>(newMockEvent())

  setIsEarnableEvent.parameters = new Array()

  setIsEarnableEvent.parameters.push(
    new ethereum.EventParam(
      "_isEarnable",
      ethereum.Value.fromBoolean(_isEarnable)
    )
  )

  return setIsEarnableEvent
}

export function createSetSettingsEvent(
  _withdrawFeeFactor: BigInt,
  _buyBackRate: BigInt,
  _slippageFactor: BigInt
): SetSettings {
  let setSettingsEvent = changetype<SetSettings>(newMockEvent())

  setSettingsEvent.parameters = new Array()

  setSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "_withdrawFeeFactor",
      ethereum.Value.fromUnsignedBigInt(_withdrawFeeFactor)
    )
  )
  setSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "_buyBackRate",
      ethereum.Value.fromUnsignedBigInt(_buyBackRate)
    )
  )
  setSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "_slippageFactor",
      ethereum.Value.fromUnsignedBigInt(_slippageFactor)
    )
  )

  return setSettingsEvent
}

export function createSetUniRouterAddressEvent(
  _uniRouterAddress: Address
): SetUniRouterAddress {
  let setUniRouterAddressEvent = changetype<SetUniRouterAddress>(newMockEvent())

  setUniRouterAddressEvent.parameters = new Array()

  setUniRouterAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_uniRouterAddress",
      ethereum.Value.fromAddress(_uniRouterAddress)
    )
  )

  return setUniRouterAddressEvent
}

export function createSetWethToAvaRouterAddressEvent(
  _wethToAvaRouterAddress: Address
): SetWethToAvaRouterAddress {
  let setWethToAvaRouterAddressEvent = changetype<SetWethToAvaRouterAddress>(
    newMockEvent()
  )

  setWethToAvaRouterAddressEvent.parameters = new Array()

  setWethToAvaRouterAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_wethToAvaRouterAddress",
      ethereum.Value.fromAddress(_wethToAvaRouterAddress)
    )
  )

  return setWethToAvaRouterAddressEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
