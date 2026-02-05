import d from "../data/basepay/2026.json" assert { type: "json" };

function requireNumber(x, msg) {
  if (typeof x !== "number" || !Number.isFinite(x)) throw new Error(msg);
}

const o1 = d.tables?.CO?.["O-1"];
if (!Array.isArray(o1)) throw new Error("CO O-1 missing or not array");

// Very basic sanity: first column must be numeric
requireNumber(o1[0], "CO O-1 first column is not numeric");

// Ensure at least one grade in each table has data
for (const key of ["CO","CO_FE","WO","EM"]) {
  const t = d.tables[key];
  const any = Object.values(t).some(arr => Array.isArray(arr) && arr.some(v => typeof v === "number"));
  if (!any) throw new Error(`${key} contains no numeric values`);
}

console.log("✅ Base pay dataset looks valid");
