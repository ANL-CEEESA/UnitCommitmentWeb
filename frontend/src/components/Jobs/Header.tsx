/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import styles from "../Common/Header.module.css";

function Header() {
  return (
    <div className={styles.HeaderBox}>
      <div className={styles.HeaderContent}>
        <h1>UnitCommitment.jl</h1>
        <h2>Solver</h2>
      </div>
    </div>
  );
}

export default Header;
