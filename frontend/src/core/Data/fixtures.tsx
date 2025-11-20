/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import { UnitCommitmentScenario } from "./types";

export interface Buses {
  [busName: string]: { "Load (MW)": number[] };
}

export const BLANK_SCENARIO: UnitCommitmentScenario = {
  Parameters: {
    Version: "0.4",
    "Power balance penalty ($/MW)": 1000.0,
    "Time horizon (h)": 24,
    "Time step (min)": 60,
  },
  Buses: {},
  Generators: {},
  "Transmission lines": {},
  "Storage units": {},
  "Price-sensitive loads": {},
  Contingencies: {},
};
