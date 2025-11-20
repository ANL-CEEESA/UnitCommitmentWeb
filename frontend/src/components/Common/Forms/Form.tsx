/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import { ReactNode } from "react";
import styles from "./Form.module.css";

function Form({ children }: { children: ReactNode }) {
  return (
    <div className={styles.FormWrapper}>
      <div className={styles.Form}>{children}</div>
    </div>
  );
}

export default Form;
