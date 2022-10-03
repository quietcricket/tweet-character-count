import TweetLength from "./main"
import { test, expect } from "@jest/globals"

test("English characters only", () => {
	const text = "abcdefghijklmnopqrstuvwxyz";
	expect(TweetLength(text)).toBe(text.length);
});

test("Punctuations", () => {
	const text = "!@#$%";
	expect(TweetLength(text)).toBe(text.length);
});

test("Latin based characters with accents", () => {
	const text = "áéíóú";
	expect(TweetLength(text)).toBe(text.length);
});

test("Arabic words (unicode but counted as 1)", () => {
	const text = "لسلام عليكم";
	expect(TweetLength(text)).toBe(text.length);
});

test("Chinese punctuations (counted as 2)", () => {
	const text = "。！";
	expect(TweetLength(text)).toBe(text.length * 2);
});

test("Chinese/Japanese/Korean counted as 2 characters", () => {
	const text = "你好こんにちは안녕하십니까";
	expect(TweetLength(text)).toBe(text.length * 2);
});

test("Emoji counted as 2 characters", () => {
	const text = "🚀🚀";
	expect(TweetLength(text)).toBe(4);
});

test("Link is counted as 24 character", () => {
	const text = "https://google.com";
	expect(TweetLength(text)).toBe(24);
});

test("Mixed English, Emoji with CJK characters", () => {
	const text = "X🚀你こ하 https://google.com X🚀你こ하 https://google.com";
	expect(TweetLength(text)).toBe(18+24*2+3);
});