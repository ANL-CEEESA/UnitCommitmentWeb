/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import { schema } from "./schema";
import Ajv from "ajv";

// Create Ajv instance with detailed debug options
const ajv = new Ajv({
  useDefaults: true,
  verbose: true,
  allErrors: true,
  $data: true,
});

export interface ValidationError {
  message: string;
}

export const validate = ajv.compile(schema);
