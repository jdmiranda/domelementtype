const { ElementType, isTag } = require("./lib/index.js");

// Benchmark configuration
const ITERATIONS = 10000000;

// Create test elements
const testElements = [
    { type: ElementType.Root },
    { type: ElementType.Text },
    { type: ElementType.Directive },
    { type: ElementType.Comment },
    { type: ElementType.Script },
    { type: ElementType.Style },
    { type: ElementType.Tag },
    { type: ElementType.CDATA },
    { type: ElementType.Doctype },
];

console.log("Performance Benchmark for DOM Element Type Checks");
console.log("=".repeat(60));
console.log(`Iterations: ${ITERATIONS.toLocaleString()}`);
console.log();

// Warmup
for (let i = 0; i < 1000; i++) {
    testElements.forEach((elem) => isTag(elem));
}

// Benchmark isTag function
const startTime = process.hrtime.bigint();

for (let i = 0; i < ITERATIONS; i++) {
    testElements.forEach((elem) => isTag(elem));
}

const endTime = process.hrtime.bigint();
const duration = Number(endTime - startTime) / 1_000_000; // Convert to milliseconds

console.log("Results:");
console.log("-".repeat(60));
console.log(`Total time: ${duration.toFixed(2)} ms`);
console.log(
    `Operations per second: ${((ITERATIONS * testElements.length) / (duration / 1000)).toLocaleString(undefined, { maximumFractionDigits: 0 })} ops/sec`
);
console.log(
    `Average time per operation: ${(duration / (ITERATIONS * testElements.length) * 1_000_000).toFixed(3)} ns`
);
console.log();

// Verify correctness
console.log("Correctness verification:");
console.log("-".repeat(60));
testElements.forEach((elem) => {
    const result = isTag(elem);
    const typeName = Object.keys(ElementType).find(
        (key) => ElementType[key] === elem.type
    );
    console.log(`${typeName}: ${result}`);
});
