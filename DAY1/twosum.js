
// firts approach --->0(n^2) time complexity
//Brute force approach


function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
    return null;
}


console.log(twoSum([2,7,11,15],87))



//second approach --->0(n) time complexity

function twoSum(arr,target){
    let map={};
    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i];
        if(diff in map){
            return [map[diff],i]
        }
        map[arr[i]]=i;
    }
    return null;
}

console.log(twoSum([2,7,11,15],9))
