/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import { useNavigate, useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "../Common/Footer";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./Jobs.module.css";
import formStyles from "../Common/Forms/Form.module.css";
import SolutionTable from "./SolutionTable";

interface JobData {
  log: string;
  solution: any;
  input: any;
  position: number;
}

const SOLUTION_TABLES = [
  "Is on",
  "Thermal production (MW)",
  "Startup cost ($)",
  "Thermal production cost ($)",
  "Profiled production (MW)",
  "Profiled production cost ($)",
  "Net injection (MW)",
  "Load curtail (MW)",
  "Line overflow (MW)",
  "Price-sensitive loads (MW)",
  "Storage level (MWh)",
  "Storage charging rates (MW)",
  "Storage charging cost ($)",
  "Storage discharging rates (MW)",
  "Storage discharging cost ($)",
  "Spinning reserve shortfall (MW)",
];

const Jobs = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState<JobData | null>(null);
  const [selectedTable, setSelectedTable] = useState<string>(SOLUTION_TABLES[0]!);
  const logRef = useRef<HTMLDivElement>(null);
  const previousLogRef = useRef<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchJobData = async () => {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/jobs/${jobId}/view`);
      if (!response.ok) {
        console.error(response);
        return;
      }
      const data = await response.json();

      if (data.solution) {
        // Stop polling if solution exists
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        // Parse solution
        data.solution = JSON.parse(data.solution);
      }

      // Update data
      setJobData(data);
      console.log(data);
    };

    // Fetch immediately
    fetchJobData();

    // Set up polling every second
    intervalRef.current = setInterval(fetchJobData, 1000);

    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [jobId]);

  // Auto-scroll to the bottom when log content changes
  useEffect(() => {
    if (jobData?.log && jobData.log !== previousLogRef.current) {
      previousLogRef.current = jobData.log;
      if (logRef.current) {
        logRef.current.scrollTop = logRef.current.scrollHeight;
      }
    }
  }, [jobData?.log]);

  const onEdit = () => {
    if (jobData?.input) {
      localStorage.setItem("scenario", jobData.input);
      navigate("/");
    }
  };

  return (
    <div>
      <Header onEdit={onEdit} canEdit={!!jobData?.input} />
      <div className="content">
        <SectionHeader title="Optimization log" />
        <div className={formStyles.FormWrapper}>
          <div className={styles.SolverLog} ref={logRef}>
            {jobData
              ? jobData.log || `Waiting for ${jobData.position} other optimization job(s) to finish...`
              : "Loading..."}
          </div>
        </div>
        {jobData?.solution && (
          <div className={styles.SolutionHeader}>
            <select
              id="table-select"
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className={styles.SolutionHeaderSelect}
            >
              {SOLUTION_TABLES.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        )}
        <SolutionTable
          solutionKey={selectedTable}
          jobData={jobData}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
