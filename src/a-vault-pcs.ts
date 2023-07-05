import {
  Approval as ApprovalEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PathsUpdated as PathsUpdatedEvent,
  Paused as PausedEvent,
  SetBuyBackAddress as SetBuyBackAddressEvent,
  SetDiceModulus as SetDiceModulusEvent,
  SetIsEarnable as SetIsEarnableEvent,
  SetSettings as SetSettingsEvent,
  SetUniRouterAddress as SetUniRouterAddressEvent,
  SetWethToAvaRouterAddress as SetWethToAvaRouterAddressEvent,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent
} from "../generated/AVaultPCS/AVaultPCS"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePathsUpdated(event: PathsUpdatedEvent): void {
  let entity = new PathsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBuyBackAddress(event: SetBuyBackAddressEvent): void {
  let entity = new SetBuyBackAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._buyBackAddress = event.params._buyBackAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetDiceModulus(event: SetDiceModulusEvent): void {
  let entity = new SetDiceModulus(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._diceModulus = event.params._diceModulus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetIsEarnable(event: SetIsEarnableEvent): void {
  let entity = new SetIsEarnable(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._isEarnable = event.params._isEarnable

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetSettings(event: SetSettingsEvent): void {
  let entity = new SetSettings(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._withdrawFeeFactor = event.params._withdrawFeeFactor
  entity._buyBackRate = event.params._buyBackRate
  entity._slippageFactor = event.params._slippageFactor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetUniRouterAddress(
  event: SetUniRouterAddressEvent
): void {
  let entity = new SetUniRouterAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._uniRouterAddress = event.params._uniRouterAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetWethToAvaRouterAddress(
  event: SetWethToAvaRouterAddressEvent
): void {
  let entity = new SetWethToAvaRouterAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._wethToAvaRouterAddress = event.params._wethToAvaRouterAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
