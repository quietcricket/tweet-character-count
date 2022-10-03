# tweet-character-count
A JavaScript function counting how many characters a tweet contains.


## Implemented points
* CJK (Chinese, Japanese and Korean) characters are counted as 2 characters for each character
* Other unicode characters like Arabic, latin or Greeks are counted as 1 character
* Links are counted as 24 characters regardless length (all links are converted to `https://t.co` links by Twitter)
* Emojis are counted as 2 characters. This is handled by the native String.length correctly. 
