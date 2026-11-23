import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages & Core Systems',
    description: 'Foundational programming languages used for competitive programming, system logic, and mobile architectures.',
    skills: [
      { name: 'C & C++', level: 'Proficient', context: 'Competitive programming on LeetCode & Codeforces, high-performance algorithm implementations, memory layout, pointers, STL containers.' },
      { name: 'Java', level: 'Intermediate', context: 'Data structures & algorithms (LinkedIn Learning certified), OOP architecture, PlacementProAI repository, monotonic stack implementations.' },
      { name: 'Dart', level: 'Intermediate', context: 'Learned independently to build Paisa; asynchronous streams, null-safety, widget lifecycles, and SQLite integration.' },
      { name: 'JavaScript & TypeScript', level: 'Intermediate', context: 'Primary tools for modern web applications, typing StudyHub Pro components, DOM manipulation, asynchronous state.' },
      { name: 'Python', level: 'Familiar', context: 'Sitha AI desktop prototype, speech recognition pipelines, hackathon automation scripts, ongoing backend & LLM learning.' }
    ]
  },
  {
    title: 'Frameworks & Frontend / Mobile',
    description: 'Modern component-driven web frameworks and cross-platform mobile development ecosystems.',
    skills: [
      { name: 'Flutter', level: 'Intermediate', context: 'Solo developer of Paisa. Offline-first state management, custom UI themes, animations, multi-wallet views, local storage plugins.' },
      { name: 'React & Vite', level: 'Intermediate', context: 'Engineered StudyHub Pro and this 3D portfolio; custom hooks, responsive component hierarchy, Three.js canvas integration.' },
      { name: 'Tailwind CSS', level: 'Proficient', context: 'Fast, responsive, editorial layout design, dark/light themes, typography scales, glassmorphism UI.' },
      { name: 'HTML5 & CSS3', level: 'Proficient', context: 'Semantic markup, accessibility (ARIA), CSS grid/flexbox, 3D perspective transforms, responsive media queries.' }
    ]
  },
  {
    title: 'Databases & Cloud Backend',
    description: 'Local persistence and serverless cloud data stores engineered for reliability.',
    skills: [
      { name: 'SQLite', level: 'Intermediate', context: 'Heart of Paisa: local ACID transactions, double-entry wallet bookkeeping, raw SQL queries, and zero-latency persistence.' },
      { name: 'SQL & Relational DBs', level: 'Intermediate', context: 'Relational schema design, normalization, indexing, joins, aggregate queries, and DBMS interview principles.' },
      { name: 'Firebase (Auth & Firestore)', level: 'Intermediate', context: 'Authentication session management and real-time document stores for StudyHub Pro and GoBuddy.' }
    ]
  },
  {
    title: 'Core Computer Science & DSA',
    description: 'Theoretical foundations and problem-solving patterns tested across top competitive programming platforms.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Proficient', context: 'Monotonic stacks, prefix sums, binary search, trees, graphs, dynamic programming, sliding window patterns.' },
      { name: 'Competitive Programming', level: 'Proficient', context: 'Active problem solving on LeetCode, Codeforces, CodeChef, AtCoder, and CSES problem sets.' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Proficient', context: 'Encapsulation, inheritance, polymorphism, abstraction, design patterns applied in Java and Dart.' },
      { name: 'Computer Networks', level: 'Intermediate', context: 'OSI & TCP/IP stack, routing protocols, sockets, HTTP/HTTPS handshake, certified by Scaler Topics.' }
    ]
  },
  {
    title: 'Tools & Emerging Technologies',
    description: 'Development environments, version control systems, and contemporary AI tooling.',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient', context: 'Branch workflows, semantic commit messages, open-source portfolio maintenance, collaborative team hackathons.' },
      { name: 'VS Code & Android Studio', level: 'Proficient', context: 'Primary development environments for TypeScript, Flutter APK emulation, debugging, and profiling.' },
      { name: 'Prompt Engineering & LLMs', level: 'Familiar', context: 'Beginner prompt engineering, exploring local models (Ollama), structured API responses, and practical AI automation.' }
    ]
  }
];

export const codeSnippets = [
  {
    id: 'monotonic-stack',
    title: 'Java Monotonic Stack (Next Greater Element)',
    language: 'java',
    description: 'An optimal O(N) linear time approach to find the next greater element for each array index using a monotonic decreasing stack.',
    code: `// Solution by Prem Kumar M
import java.util.*;

public class MonotonicStack {
    /**
     * Computes the Next Greater Element for each item in an array in O(N) time.
     * Traditional nested loops cost O(N^2); monotonic stacks prune unnecessary checks.
     */
    public static int[] nextGreaterElement(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        // Stack stores indices of elements in monotonically decreasing order
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            // While current element is greater than the element at stack top
            while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
                int prevIndex = stack.pop();
                result[prevIndex] = nums[i]; // Found next greater element!
            }
            stack.push(i);
        }

        // Elements left in stack have no greater element to their right
        while (!stack.isEmpty()) {
            result[stack.pop()] = -1;
        }

        return result;
    }
}`
  },
  {
    id: 'sqlite-transaction',
    title: 'Flutter / SQLite Atomic Wallet Transfer (Paisa)',
    language: 'dart',
    description: 'Real production snippet from Paisa ensuring double-entry balance consistency using SQLite ACID transactions.',
    code: `// Paisa Wallet Engine - Prem Kumar M
import 'package:sqflite/sqflite.dart';

class WalletRepository {
  final Database db;
  WalletRepository(this.db);

  /// Transfers funds between two local wallets (e.g., Bank -> Cash or UPI)
  /// Wrapped in an atomic transaction to guarantee financial consistency.
  Future<void> transferFunds({
    required int sourceWalletId,
    required int targetWalletId,
    required double amount,
    required String note,
  }) async {
    await db.transaction((txn) async {
      // 1. Verify source wallet has sufficient funds
      final source = await txn.query(
        'wallets',
        where: 'id = ?',
        whereArgs: [sourceWalletId],
      );
      if (source.isEmpty) throw Exception('Source wallet not found');
      
      final double currentBalance = source.first['balance'] as double;
      if (currentBalance < amount) throw Exception('Insufficient balance');

      // 2. Debit source wallet
      await txn.rawUpdate(
        'UPDATE wallets SET balance = balance - ? WHERE id = ?',
        [amount, sourceWalletId],
      );

      // 3. Credit destination wallet
      await txn.rawUpdate(
        'UPDATE wallets SET balance = balance + ? WHERE id = ?',
        [amount, targetWalletId],
      );

      // 4. Log immutable ledger entry for audit trail
      await txn.insert('transactions', {
        'source_wallet_id': sourceWalletId,
        'target_wallet_id': targetWalletId,
        'amount': amount,
        'type': 'TRANSFER',
        'note': note,
        'timestamp': DateTime.now().millisecondsSinceEpoch,
      });
    });
  }
}`
  },
  {
    id: 'prefix-sum',
    title: 'Fast C++ Prefix Sum & 2D Grid Queries',
    language: 'cpp',
    description: 'Fast I/O and 2D prefix sum computation used in competitive programming for O(1) subarray query evaluations.',
    code: `// Competitive Programming Pattern by Prem Kumar M
#include <iostream>
#include <vector>

using namespace std;

int main() {
    // Fast I/O optimization for competitive platforms
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int rows = 4, cols = 4;
    // Example 2D grid
    vector<vector<int>> grid = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 1, 2, 3},
        {4, 5, 6, 7}
    };

    // 2D Prefix Sum Array with 1-based indexing
    vector<vector<long long>> pref(rows + 1, vector<long long>(cols + 1, 0));

    for (int r = 1; r <= rows; r++) {
        for (int c = 1; c <= cols; c++) {
            pref[r][c] = grid[r - 1][c - 1]
                       + pref[r - 1][c]
                       + pref[r][c - 1]
                       - pref[r - 1][c - 1]; // Avoid double-counting overlap
        }
    }

    // Query submatrix sum from (r1, c1) to (r2, c2) in O(1) time
    auto querySubgrid = [&](int r1, int c1, int r2, int c2) -> long long {
        return pref[r2][c2] - pref[r1 - 1][c2] - pref[r2][c1 - 1] + pref[r1 - 1][c1 - 1];
    };

    cout << "Subgrid (2,2) to (4,4) Sum: " << querySubgrid(2, 2, 4, 4) << "\n";
    return 0;
}`
  }
];
