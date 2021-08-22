// Given a string s, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

/**
 * Thought process.
 * Use the sliding window approach appending each character to substring
 * until the substring has no repeating character.
 * When it does, slice the substring for the first index of the repeating character,
 * append the new character and set them to the sbustring.
 * If the new sliced substring is longer than the result string, keep the substring in the result.
 * Result var is used to hold the longest substring without repeating characters.
 */

/**
 * To Improve.
 * Remove indexOf and use Set/Map instead for better O(1).
 * Find a way to reduce memory usage. 
 */

const lengthOfLongestSubString = (s = '') => {
    let substring = '';
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let index = substring.indexOf(s[i]);
        if (index >= 0) {
            substring = substring.substring(index + 1);
        }
        if ((substring + s[i]).length > result.length) {
            result = substring + s[i];
        }
        substring = substring + s[i];
    }
    return result.length;
}
