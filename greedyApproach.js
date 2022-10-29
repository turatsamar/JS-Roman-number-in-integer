/*
You have n flower seeds. Every seed must be planted first before it can begin to grow, then bloom. Planting a seed takes time and so does the growth of a seed. You are given two 0-indexed integer arrays plantTime and growTime, of length n each:

plantTime[i] is the number of full days it takes you to plant the ith seed. Every day, you can work on planting exactly one seed. You do not have to work on planting the same seed on consecutive days, but the planting of a seed is not complete until you have worked plantTime[i] days on planting it in total.
growTime[i] is the number of full days it takes the ith seed to grow after being completely planted. After the last day of its growth, the flower blooms and stays bloomed forever.
From the beginning of day 0, you can plant the seeds in any order.

Return the earliest possible day where all seeds are blooming.

 
*/
/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
 var earliestFullBloom = function(plantTime, growTime) 
 {
     let times = [];
     for(let i=0; i<plantTime.length; i++)
             times.push([plantTime[i], growTime[i]]);
 
     times.sort((a,b)=>b[1]-a[1]);
 
     let t = 0, bt = 0;
     for(let i=0; i<times.length; i++)
     {
         t += times[i][0];
         bt = Math.max(bt, t+times[i][1]);
     }
     return bt;
 };