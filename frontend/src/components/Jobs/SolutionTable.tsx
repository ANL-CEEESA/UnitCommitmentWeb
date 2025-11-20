/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import formStyles from "../Common/Forms/Form.module.css";
import DataTable, { columnsCommonAttrs, floatFormatter, generateTimeslots } from "../Common/Forms/DataTable";
import { ColumnDefinition } from "tabulator-tables";
import { UnitCommitmentScenario } from "../../core/Data/types";

interface SolutionTableProps {
  solutionKey: string;
  jobData: {
    solution: any;
    input: any;
  } | null;
}

const SolutionTable = ({
  solutionKey,
  jobData,
}: SolutionTableProps) => {
  const generateSolutionTableData = (): [any[], ColumnDefinition[]] => {
    if (
      !jobData?.solution ||
      !jobData.solution[solutionKey] ||
      !jobData.input
    ) {
      return [[], []];
    }

    const solutionData = jobData.solution[solutionKey];
    const itemNames = Object.keys(solutionData);

    if (itemNames.length === 0) {
      return [[], []];
    }

    // Parse the input scenario and generate timeslots
    const scenario = JSON.parse(jobData.input) as UnitCommitmentScenario;
    const timeslots = generateTimeslots(scenario);

    // Create columns: first column is Name, then one column per timeslot
    const columns: ColumnDefinition[] = [
      {
        ...columnsCommonAttrs,
        title: "Name",
        field: "Name",
        minWidth: 100,
      },
    ];

    for (let t = 0; t < timeslots.length; t++) {
      columns.push({
        ...columnsCommonAttrs,
        title: timeslots[t]!,
        field: timeslots[t]!,
        minWidth: 80,
        formatter: floatFormatter,
      });
    }

    // Create data rows: one row per item
    const data: any[] = [];
    for (const itemName of itemNames) {
      const row: any = { Name: itemName };
      const values = solutionData[itemName];
      for (let t = 0; t < timeslots.length; t++) {
        row[timeslots[t]!] = values[t];
      }
      data.push(row);
    }

    return [data, columns];
  };

  if (!jobData?.solution || !jobData.solution[solutionKey]) {
    return null;
  }

  return (
    <div className={formStyles.FormWrapper}>
      <DataTable
        generateData={generateSolutionTableData}
        onRowDeleted={() => null}
        onRowRenamed={() => null}
        onDataChanged={() => null}
      />
    </div>
  );
};

export default SolutionTable;
