// Алгоритмы на JS

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Линейный поиск
// сложность O(n), где n - длина списка

// function searchElement(arr, el) {
// 	for (let i = 0; i <= arr.length; i++) {
// 		if (arr[i] == el) {
// 			return i;
// 		}
// 	}
// 	return -1
// }

// console.log(searchElement(arr, 7))

//Бинарный поиск
// сложность O(n), где n - длина списка

function searchElement(arr, el) {
	// left и right - позиция в массиве
	let left = -1; //не может быть левее самого левого элемента
	let right = arr.length; //не может быть правее самого правого элемента

	while (right - left > 1) { // если разница между ними больше единицы - то ищем дальше. Если меньше - то нашли
		const mid = Math.floor((right - left) / 2); // вычисляем середину

		if (arr[mid] === el) {
			return mid;
		}

		if (arr[mid] > el) {
			right = mid;
		} else {
			left = mid;
		}
	}

	return -1
}

console.log(searchElement(arr, 8))


console.log('Hello')