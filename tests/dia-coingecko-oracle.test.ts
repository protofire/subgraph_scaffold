import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { OracleUpdate } from "../generated/schema"
import { OracleUpdate as OracleUpdateEvent } from "../generated/DIACoingeckoOracle/DIACoingeckoOracle"
import { handleOracleUpdate } from "../src/dia-coingecko-oracle"
import { createOracleUpdateEvent } from "./dia-coingecko-oracle-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let key = "Example string value"
    let value = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let newOracleUpdateEvent = createOracleUpdateEvent(key, value, timestamp)
    handleOracleUpdate(newOracleUpdateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("OracleUpdate created and stored", () => {
    assert.entityCount("OracleUpdate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "OracleUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "key",
      "Example string value"
    )
    assert.fieldEquals(
      "OracleUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "value",
      "234"
    )
    assert.fieldEquals(
      "OracleUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
