const crypto = require("crypto");

// exports.deterministicPartitionKey = (event) => {
//   const TRIVIAL_PARTITION_KEY = "0";
//   const MAX_PARTITION_KEY_LENGTH = 256;
//   let candidate;

//   if (event) {
//     if (event.partitionKey) {
//       candidate = event.partitionKey;
//     } else {
//       const data = JSON.stringify(event);
//       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
//     }
//   }

//   if (candidate) {
//     if (typeof candidate !== "string") {
//       candidate = JSON.stringify(candidate);
//     }
//   } else {
//     candidate = TRIVIAL_PARTITION_KEY;
//   }
//   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
//   }
//   return candidate;
// };

const createHashDigest = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

// My version is more readable as it contains less complex conditions and reassignings of variables
// We cut all the edge cases in the start and then process the regular flow
// Also removed repeated method calls
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // returns TRIVIAL_PARTITION_KEY if no event
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  // returns hashed stringified event if no partitionKey
  if (!event.partitionKey) {
    const data = JSON.stringify(event);
    return createHashDigest(data)
  }

  const { partitionKey } = event;
  const candidate = typeof partitionKey !== "string" ? JSON.stringify(partitionKey) : partitionKey;

  return candidate.length > MAX_PARTITION_KEY_LENGTH ? createHashDigest(candidate) : candidate
};