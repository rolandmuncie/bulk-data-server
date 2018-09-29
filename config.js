const PORT = process.env.PORT || (process.env.NODE_ENV == "test" ? 9444 : 9443);
module.exports = {

    baseUrl: "https://r1-bulkfhir.paas-poc.am.lilly.com",
    port: PORT,

    throttle: 1,
    
    // Max. number of fhir resources (lines) in one ndjson file
    defaultPageSize: 10000,

    // Pretend that we are creating files for 10 seconds
    defaultWaitTime: 10,

    // Default Token LifeTime in minutes
    defaultTokenLifeTime: 15,

    // The maximum number of files that can be downloaded
    maxFiles: 150,

    // How many rows to select (load into memory and then stream them one by one).
    // The bigger the number the fewer sql queries will be executed but more
    // memory will be needed to store those bigger chunks of data
    rowsPerChunk: 500,

    jwtSecret: process.env.SECRET || "this-is-our-big-secret",

    errors: {
        "missing_parameter"               : "Missing %s parameter",
        "invalid_parameter"               : "Invalid %s parameter",
        "form_content_type_required"      : "Invalid request content-type header (must be 'application/x-www-form-urlencoded')",
        "sim_invalid_token"               : "Simulated invalid token error",
        "invalid_token"                   : "Invalid token: %s",
        "missing_client_assertion_type"   : "Missing client_assertion_type parameter",
        "invalid_client_assertion_type"   : "Invalid client_assertion_type parameter. Must be 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'.",
        "invalid_jti"                     : "Invalid 'jti' value",
        "invalid_aud"                     : "Invalid token 'aud' value. Must be '%s'.",
        "invalid_token_iss"               : "The given iss '%s' does not match the registered client_id '%s'",
        "token_expired_registration_token": "Registration token expired",
        "invalid_registration_token"      : "Invalid registration token: %s",
        "invalid_client_details_token"    : "Invalid client details token: %s",
        "invalid_scope"                   : 'Invalid scope: "%s"',
        "missing_scope"                   : "Empty scope",
        "token_invalid_scope"             : "Simulated invalid scope error",
        "bad_grant_type"                  : "Unknown or missing grant_type parameter",
        "file_expired"                    : 'The requested file "%s" is missing or expired',
        "file_generation_failed"          : "File generation failed",
        "only_json_supported"             : "Only the JSON format is supported",
        "jku_not_whitelisted"             : "The provided jku '%s' is different than the one used at registration time (%s)",
        "__custom__"                      : "%s"
    },

    oauthErrors: { // errorName: defaultMessage

        // The request is missing a required parameter, includes an
        // unsupported parameter value (other than grant type),
        // repeats a parameter, includes multiple credentials,
        // utilizes more than one mechanism for authenticating the
        // client, or is otherwise malformed.
        "invalid_request": "Invalid request",

        // Client authentication failed (e.g., unknown client, no
        // client authentication included, or unsupported
        // authentication method).  The authorization server MAY
        // return an HTTP 401 (Unauthorized) status code to indicate
        // which HTTP authentication schemes are supported.  If the
        // client attempted to authenticate via the "Authorization"
        // request header field, the authorization server MUST
        // respond with an HTTP 401 (Unauthorized) status code and
        // include the "WWW-Authenticate" response header field
        // matching the authentication scheme used by the client.
        "invalid_client": "Invalid client",

        // The provided authorization grant (e.g., authorization
        // code, resource owner credentials) or refresh token is
        // invalid, expired, revoked, does not match the redirection
        // URI used in the authorization request, or was issued to
        // another client.
        "invalid_grant": "Invalid grant",

        // The authenticated client is not authorized to use this
        // authorization grant type.
        "unauthorized_client": "Unauthorized client",
            

        // The authorization grant type is not supported by the
        // authorization server.
        "unsupported_grant_type": "Unsupported grant type",

        // The requested scope is invalid, unknown, malformed, or
        // exceeds the scope granted by the resource owner.
        "invalid_scope": "Invalid scope"
    }
};
