const findLongestSubstring = (strings) => {
    if (!strings || strings.length < 1) {
        return '';
    }

    const shortestSubstring = strings.reduce((string, current) => string.length <= current.length ? string : current);
    let longestSubstring = '';

    for(let i = 0; i <= shortestSubstring.length; i++) {
        for (let j = i + 1; j <= shortestSubstring.length; j++) {
            const substring = shortestSubstring.slice(i, j);

            if(strings.every(str => str.includes(substring))) {
                if(substring.length > longestSubstring.length) {
                    longestSubstring = substring;
                }
            }
        }
    }
    return longestSubstring;
}

const longestSSubstring = findLongestSubstring(process.argv.slice(2));

console.log(longestSSubstring);
