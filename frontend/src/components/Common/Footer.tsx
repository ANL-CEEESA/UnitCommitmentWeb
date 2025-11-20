/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      UnitCommitment.jl: Optimization Package for Security-Constrained Unit
      Commitment <br />
      Copyright (C) 2020-2025, UChicago Argonne, LLC. All rights reserved.
    </div>
  );
}

export default Footer;
