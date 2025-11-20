/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import { parseBool } from "./commonOps";
import assert from "node:assert";

test("parseBool", () => {
  // True values
  for (const str of ["true", "TRUE", "1"]) {
    let [v, err] = parseBool(str);
    assert(!err);
    assert.equal(v, true);
  }

  // False values
  for (const str of ["false", "FALSE", "0"]) {
    let [v, err] = parseBool(str);
    assert(!err);
    assert.equal(v, false);
  }

  // Invalid values
  for (const str of ["qwe", ""]) {
    let [, err] = parseBool(str);
    assert(err);
  }
});
