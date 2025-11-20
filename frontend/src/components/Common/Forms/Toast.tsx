/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import styles from "./Toast.module.css";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
}

const Toast = (props: ToastProps) => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    if (props.message.length === 0) return;
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [props.message]);

  return (
    <div>
      <div className={styles.Toast} style={{ opacity: isVisible ? 1 : 0 }}>
        {props.message}
      </div>
    </div>
  );
};

export default Toast;
