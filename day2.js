// Bài 2: Tìm số lớn nhất trong mảng. Viết một hàm để tìm giá trị lớn nhất trong mảng số. Gợi ý: Sử dụng vòng lặp hoặc phương thức Math.max().

console.log('Bài tập 2');

function findMax(arr) {
    let max = arr[0]; // Khởi tạo giá trị lớn nhất là phần tử đầu tiên của mảng

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Cập nhật giá trị lớn nhất nếu phần tử hiện tại lớn hơn
        }
    }
    return max; 
}
console.log(findMax([10, 20, 30, 5]));

///Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng đầu vào. Sử dụng for
console.log('Bài tập 3');
function filterEvenNumbers(arr) {
    let evenNumbers = []; 
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]); 
        }
    }
        return evenNumbers;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

///Bài 4: Đếm số lần xuất hiện của một phần tử. Viết một hàm đếm số lần xuất hiện của một phần tử cụ thể trong mảng. Gợi ý: Sử dụng vòng lặp 
console.log('Bài tập 4');
function countOccurrences(arr, value) {
    let result = 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] == value) {
            result ++; // Cập nhật giá trị lớn nhất nếu phần tử hiện tại lớn hơn
        }
    }
    return result; 
}
console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2)); // 3

///   Bài 5: Đảo ngược mảng. Viết một hàm để đảo ngược thứ tự các phần tử trong mảng. Gợi ý: Sử dụng vòng lặp hoặc phương thức reverse().
console.log('Bài tập 5');
function reverseArray(arr) {
    let array = [];
    for (let i = arr.length; i > 0; i--) {
        array.push(arr[i-1]);
    }
    return array;
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

/// Bài 6: Loại bỏ phần tử trùng lặp. Viết một hàm để loại bỏ các phần tử trùng lặp trong mảng. Gợi ý: Sử dụng Set hoặc vòng lặp.
console.log('Bài tập 6');
function removeDuplicates(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++){
        if (array.indexOf(arr[i]) === -1){
            array.push(arr[i]);
        }
    }
    return array;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

/// Bài 7: Sắp xếp mảng tăng dần. Viết một hàm để sắp xếp mảng số theo thứ tự tăng dần. Gợi ý: Sử dụng phương thức sort().
console.log('Bài tập 7');
function sortArrayAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
  }
  return arr;
}

console.log(sortArrayAscending([5, 2, 9, 1])); // [1, 2, 5, 9]
  

// Bài 8: Tìm phần tử xuất hiện nhiều nhất. Viết một hàm để tìm phần tử xuất hiện nhiều nhất trong mảng. Gợi ý: Sử dụng đối tượng (object) để lưu tần suất.
console.log('Bài tập 8');
function findMostFrequent(arr) {
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequent = null;    
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (frequencyMap[item] == null) {
            frequencyMap[item] = 1;
        } else {
            frequencyMap[item]++;
        } 
        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostFrequent = item;
        }
    }   
    return mostFrequent;
}
  
console.log(findMostFrequent([1, 2, 3, 2, 1, 2])); // 2
  

// Bài 9: Gộp hai mảng và loại bỏ trùng lặp. Viết một hàm để gộp hai mảng thành một mảng mới và loại bỏ các phần tử trùng lặp. Gợi ý: Sử dụng Set hoặc vòng lặp.
console.log('Bài tập 9');
function mergeAndRemoveDuplicates(arr1, arr2) {
        let mergedArray = arr1.concat(arr2);
        let uniqueArray = [];

        for (let i = 0; i < mergedArray.length; i++) {
            if (uniqueArray.indexOf(mergedArray[i]) === -1) {
                uniqueArray.push(mergedArray[i]);
            }
        }

        return uniqueArray;
    }

    console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
  

// Bài 10: Kiểm tra mảng đối xứng. Viết một hàm để kiểm tra xem mảng có phải là đối xứng hay không (phần tử đầu bằng phần tử cuối, phần tử thứ hai bằng phần tử áp cuối,...). Gợi ý: Sử dụng vòng lặp hoặc so sánh từng cặp phần tử.
console.log('Bài tập 10');
function isSymmetricArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isSymmetricArray([1, 2, 3, 2, 1])); // true
console.log(isSymmetricArray([1, 2, 3, 4, 5])); // false
  
