using System;
using System.Collections.Generic;

namespace DSharpPlus.Net
{
    /// <inheritdoc />
    /// <summary>
    /// Represents a non-multipart HTTP request that silently ignores 429 errors and retries with a delay. 
    /// </summary>
    public class BulldozerRestRequest : BaseRestRequest
    {
        /// <summary>
        /// The request retry delay, in seconds.
        /// </summary>
        internal int RetryDelay { get; set; } = 1;

        internal BulldozerRestRequest(BaseDiscordClient client, RateLimitBucket bucket, Uri url, RestRequestMethod method, IDictionary<string, string> headers = null) 
            : base(client, bucket, url, method, headers)
        {
        }
    }
}