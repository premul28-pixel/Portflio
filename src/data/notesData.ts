import { EngineeringNote } from '../types';

export const notesData: EngineeringNote[] = [
  {
    id: 'monotonic-stack-java',
    title: 'Demystifying the Monotonic Stack in Java: Slashing O(N²) Array Searches to Linear O(N)',
    slug: 'monotonic-stack-java',
    date: 'October 2026',
    readTime: '4 min read',
    category: 'Algorithms & DSA',
    summary: 'How maintaining a strictly decreasing stack of indices eliminates redundant comparisons for Next Greater Element and largest rectangle histogram problems.',
    content: [
      'When preparing for algorithmic placement rounds, one of the most transformative realizations is seeing how naive O(N²) nested loops can be systematically collapsed into O(N) linear time using a monotonic stack.',
      'The core invariant of a monotonic decreasing stack is simple: elements stored inside always decrease from bottom to top. As we iterate through the input array, every time we encounter an element larger than the top of our stack, we have discovered the "next greater element" for that top index.',
      'Because each array index is pushed onto the stack exactly once and popped at most once, the total amortized cost across the entire sequence is strictly 2N operations — regardless of array permutation.',
      'In Java, using `Deque<Integer> stack = new ArrayDeque<>()` avoids the legacy synchronization overhead of the old `Stack` class, yielding tight, cache-friendly execution times during LeetCode contests.'
    ],
    codeSnippet: {
      language: 'java',
      code: `// Optimal Java Monotonic Stack
Deque<Integer> stack = new ArrayDeque<>();
for (int i = 0; i < nums.length; i++) {
    while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
        int idx = stack.pop();
        nextGreater[idx] = nums[i];
    }
    stack.push(i);
}`
    },
    keyTakeaways: [
      'Each element is pushed and popped at most once: strictly O(N) amortized time.',
      'Store array indices rather than raw values to easily compute distances, widths, or array locations.',
      'Use ArrayDeque instead of legacy java.util.Stack for lower memory overhead.'
    ]
  },
  {
    id: 'offline-sqlite-wallet',
    title: 'Building an Offline-First Finance App in Flutter: Double-Entry Transactions with SQLite',
    slug: 'offline-sqlite-wallet',
    date: 'September 2026',
    readTime: '5 min read',
    category: 'Mobile & Systems Architecture',
    summary: 'Lessons learned while independently designing Paisa: how local ACID transactions, immutable ledgers, and zero cloud dependency guarantee privacy and instant UI feedback.',
    content: [
      'When I decided to build Paisa, I wanted an expense manager that worked instantaneously, even when traveling on a bus with zero 4G/5G cell signal. Most popular apps force you to wait for cloud spin-ups and telemetry pings before letting you record a single cup of tea.',
      'By choosing an embedded SQLite database using Dart sqflite, every interaction occurs within microsecond local disk writes. However, local storage introduces a strict requirement: ensuring financial consistency.',
      'If a user transfers 500 rupees from their Bank wallet to their Cash wallet, updating one balance without updating the other or failing halfway creates orphaned data. I implemented an atomic SQLite transaction block (`db.transaction`) that ensures all three steps — debit source, credit destination, and ledger journal entry — either all succeed or cleanly roll back.',
      'Designing Paisa independently taught me how offline-first state management simplifies application reliability: the device is the single source of truth, privacy is preserved by default, and network latency drops to zero.'
    ],
    codeSnippet: {
      language: 'dart',
      code: `// Atomic transaction in sqflite
await db.transaction((txn) async {
  await txn.rawUpdate('UPDATE wallets SET balance = balance - ? WHERE id = ?', [amount, src]);
  await txn.rawUpdate('UPDATE wallets SET balance = balance + ? WHERE id = ?', [amount, dst]);
  await txn.insert('ledger', {'src': src, 'dst': dst, 'amount': amount, 'time': now});
});`
    },
    keyTakeaways: [
      'ACID transactions prevent balance desynchronization across multi-wallet transfers.',
      'Zero external network telemetry means 100% financial privacy for users.',
      'Local database caching delivers instantaneous 60fps UI feedback on mobile.'
    ]
  },
  {
    id: 'prefix-sums-2d-grids',
    title: 'Mastering 2D Prefix Sums: Constant Time O(1) Subgrid Queries in Competitive Programming',
    slug: 'prefix-sums-2d-grids',
    date: 'August 2026',
    readTime: '3 min read',
    category: 'Competitive Programming',
    summary: 'The geometric intuition behind precomputing 2D matrix integrals to answer arbitrary rectangle sum queries in O(1) time without nested iterations.',
    content: [
      'In competitive programming contests on Codeforces or AtCoder, grid problems often ask: "Given an N×M matrix, answer Q queries finding the sum of all elements inside submatrix [r1, c1] to [r2, c2]."',
      'Iterating through every cell for each query yields an unacceptable O(Q × N × M) complexity that invariably triggers Time Limit Exceeded (TLE).',
      'By spending O(N × M) in a precomputation phase to construct a 2D Prefix Sum table `pref[r][c]`, we store the sum of the rectangular region bounded from (1, 1) to (r, c).',
      'Using the principle of inclusion-exclusion, any arbitrary query can then be evaluated in exactly 4 operations: `pref[r2][c2] - pref[r1-1][c2] - pref[r2][c1-1] + pref[r1-1][c1-1]`. What once took quadratic time now executes in literal nanoseconds.'
    ],
    codeSnippet: {
      language: 'cpp',
      code: `// Inclusion-exclusion formula for 2D query
long long query = pref[r2][c2] 
                - pref[r1 - 1][c2] 
                - pref[r2][c1 - 1] 
                + pref[r1 - 1][c1 - 1];`
    },
    keyTakeaways: [
      'Inclusion-exclusion enables O(1) evaluation for any submatrix bounding box.',
      'Use 1-based indexing for prefix tables to eliminate tedious edge cases with zero rows/cols.',
      'Can be extended to difference arrays for batch 2D range updates in competitive contests.'
    ]
  }
];
