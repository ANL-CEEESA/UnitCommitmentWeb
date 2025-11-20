/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import CaseBuilder from "./components/CaseBuilder/CaseBuilder";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Jobs from "./components/Jobs/Jobs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/builder" element={<CaseBuilder />} />
        <Route path="/jobs/:jobId" element={<Jobs />} />
        <Route path="/" element={<Navigate to="/builder" replace />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
);

reportWebVitals();
