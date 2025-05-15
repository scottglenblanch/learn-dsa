import SinglyLinkedList from '../../implementation/singly-linked-list';

export type ComparatorFunction<T> = (a: T | null, b: T | null) => number;

export function mergeLinkedLists<T>(
  list1: SinglyLinkedList<T> | null,
  list2: SinglyLinkedList<T> | null,
  compareFunction: ComparatorFunction<T>
) {
  if (list1 === null && list2 === null) return null;
  else if (list1 === null) return list2;
  else if (list2 === null) return list1;

  const copyList1 = copyList(list1);
  const copyList2 = copyList(list2);
  const newList = new SinglyLinkedList<T>();

  let val1 = copyList1.popFromFront()
  let val2 = copyList2.popFromFront();

  while(val1 !== null || val2 !== null) {
    const isUseVal1 = val1 !== null && compareFunction(val1, val2) > 0
    const isUseVal2 = val2 !== null && !isUseVal1
    
    if (isUseVal1) {
      newList.addToFront(val1 as T)
      
      val1 = copyList1.popFromFront()
    } else if (isUseVal2) {
      newList.addToFront(val2 as T)

      val2 = copyList2.popFromFront()
    } else {
      throw 'issue with logic'
    }

  }

  return newList;
}

function copyList<T>(linkedList: SinglyLinkedList<T>) {
  const arrayList = [];
  const copy = new SinglyLinkedList<T>()

  while(linkedList.length > 0) {
    arrayList.push(linkedList.popFromFront() as T)
  }

  arrayList.forEach((item: T) => {
    linkedList.addToFront(item)
    copy.addToFront(item)
  })

  return copy
}
