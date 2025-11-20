# UnitCommitmentWeb: Web Interface for UnitCommitment.jl
# Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
# Released under the GNU Affero General Public License v3.0 or later.

module BackendT

using Distributed

using Test
using HTTP
using JSON
using CodecZlib
import Backend
import JuliaFormatter
using HiGHS

BASEDIR = dirname(@__FILE__)

include("jobs_test.jl")
include("server_test.jl")

function fixture(path::String)::String
    return "$BASEDIR/../fixtures/$path"
end

function runtests()
    Backend.setup_logger()
    @testset "UCJL Backend" begin
        server_test_usage()
        jobs_test_usage()
    end
    return
end

function format()
    JuliaFormatter.format(BASEDIR, verbose = true)
    JuliaFormatter.format("$BASEDIR/../../src", verbose = true)
    return
end

export runtests, format

end
