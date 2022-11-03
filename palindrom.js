/**
 * @param {string[]} words
 * @return {number}
 */
 var longestPalindrome = function(words) 
 {
     /* Count the matched and non-matched letter pairs separately. */
     let m_pairs = new Map(), nm_pairs = new Map();
     for(let word of words)
     {
         if(word[0] === word[1])
         {
             let cnt = m_pairs.get(word) || 0;
             m_pairs.set(word, cnt+1);
         }
         else
         {
             let cnt = nm_pairs.get(word) || 0;
             nm_pairs.set(word, cnt+1);
         }
     }
 
     /* Count the total # of non-matched pairs with reflections. */
     let pw = 0, deleted = new Set();
     for (const [word, wcnt] of nm_pairs)
     {
         if(deleted.has(word))
             continue;
         let refl = word[1] + word[0];
         let reflcnt = nm_pairs.get(refl) || 0;
         pw += 2*Math.min(wcnt, reflcnt);
         deleted.add(refl);
     }
 
     /* Count the total matched pairs - if any have an odd count, one of them can go in the middle. */
     let hasOdd = false;
     for(let [word, wcnt] of m_pairs)
     {
         if(wcnt%2 === 1)
         {
             hasOdd = true;
             wcnt--;
         }
         pw += wcnt;
     }
     if(hasOdd)
         pw++;
 
     return pw*2;
 };