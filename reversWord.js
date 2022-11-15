const reverseWords = (s) => s.trim().split(' ').filter(c => c.trim().length > 0).reverse().join(' ');
