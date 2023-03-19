const { deterministicPartitionKey } = require("./dpk");

const key = 'x'.repeat(256);
const longKey = 'x'.repeat(300);

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the encoded value when given input event partitionKey length > 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: longKey });
    expect(trivialKey).toBe("523a0d2bd185ddcb7fb5e8d94f241da1cb620ed27ca715f9b0333ed38274fe2f47d35b7aed799cd1d35a68a728ceabb1f0c3ae6f6befbe94b4234e68aaa120da");
  });

  it("Returns the event.partitionKey itself when given input event.partitionKey length eq 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: key });
    expect(trivialKey).toBe(key);
  });

  it("Returns the encoded value when given input event has no partitionKey", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns the stringified partitionKey value when given input event.partitionKey not a string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: { randomProp: '256' }});
    expect(trivialKey).toBe("{\"randomProp\":\"256\"}");
  });
});
