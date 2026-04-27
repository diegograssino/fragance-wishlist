// ⚠️ TEST FILE — intentionally broken to validate the AI code review pipeline.
// This file should be deleted after testing.

// 🔴 Issue 1: Hardcoded secret in source code
const API_SECRET = "sk-prod-1234-abcd-efgh-live";

// 🔴 Issue 2: `any` type + missing await on .json()
export async function fetchUserData(userId: any) {
  const res = await fetch(`/api/users/${userId}`);
  const data = res.json(); // missing await — returns a Promise, not the data
  return data;
}

// 🟡 Issue 3: O(n²) performance — nested loop over the same array
export function findDuplicates(items: any[]) {
  return items.filter((a) => items.some((b) => b.id === a.id && b !== a));
}

// 🟡 Issue 4: Unreachable code after return
export function getStatus() {
  return "active";
  console.log("This line will never run");
}

// 🔴 Issue 5: Swallowed error — exception is caught and silently discarded
export async function saveToStorage(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // silent fail — caller never knows the write failed
  }
}
