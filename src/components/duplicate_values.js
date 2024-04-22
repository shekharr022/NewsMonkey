function printDuplicates(arr) {
    let hashMap = {};
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        if (hashMap[arr[i]]) {
            result += arr[i] + " ";
        } else {
            hashMap[arr[i]] = true;
        }
    }

    console.log(result);
}

printDuplicates([3,9,18,3,28,6,17,9,3]);