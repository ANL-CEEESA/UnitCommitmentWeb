# UnitCommitmentWeb: Web Interface for UnitCommitment.jl
# Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
# Released under the GNU Affero General Public License v3.0 or later.

using HiGHS
using JuMP
using Backend

const UCJL_HOST = get(ENV, "HOST", "0.0.0.0")
const UCJL_PORT = parse(Int, get(ENV, "PORT", "9000"))

println("Starting UnitCommitment Backend Server...")
println("Host: $UCJL_HOST")
println("Port: $UCJL_PORT")

Backend.setup_logger()
server = Backend.start_server(
    UCJL_HOST,
    UCJL_PORT;
    optimizer = optimizer_with_attributes(
        HiGHS.Optimizer, "mip_rel_gap" => 0.001,
        "threads" => 1,
    )
)
try
    wait()
catch e
    if e isa InterruptException
        println("\nShutting down server...")
        Backend.stop(server)
        println("Server stopped")
    else
        rethrow(e)
    end
end
