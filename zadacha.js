// - Реализовать алгоритм пирамидальной сортировки (сортировка кучей).
public class HeapSort {
    public static void sort(int arr[]) {
        int n = arr.length;

        // построение кучи (heapify)
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        // извлечение элементов из кучи и помещение в конец массива
        for (int i = n - 1; i >= 0; i--) {
            // перемещение текущего корня в конец
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // вызов heapify на уменьшенной куче
            heapify(arr, i, 0);
        }
    }

    private static void heapify(int arr[], int n, int i) {
        int largest = i; // корень
        int l = 2 * i + 1; // левый потомок
        int r = 2 * i + 2; // правый потомок

        // если левый потомок больше корня
        if (l < n && arr[l] > arr[largest])
            largest = l;

        // если правый потомок больше корня
        if (r < n && arr[r] > arr[largest])
            largest = r;

        // если корень не больше потомков
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            // рекурсивный вызов heapify для поддерева
            heapify(arr, n, largest);
        }
    }
}