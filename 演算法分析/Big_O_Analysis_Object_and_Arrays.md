Big O Analysis Object and Arrays

1. Object to Big O
   1. Object(hashed) is Has Table => 在 javascript 的 Object 是都已經轉換 Has Table 的型態，因為Big O 的值表現的比較好
   2. Object(hashed) to Insertion => 在這個物件你在插入一個屬性，他的屬性是 O(1) 不論你插入複雜度高或低都是 All of one 都是一樣的
   3. Object(hashed) to Removal => 在這個物件你在移除一個屬性，他的屬性是 O(1) 不論你插入複雜度高或低都是 All of one 都是一樣的
   4. Object(hashed) to Searching => 在物件找到想對應的值他也是 All of one 都是一樣的
   5. Object(hashed) to Accessing=> 在物件找到想對應的值過程 也是 All of one 都是一樣的
2. Arrays to Big O
   1. Arrays is Insertion =>
      1. push : o(1) 也是 All of one 都是一樣的
      2. unshift : o(n) 因為是加在第一個所有後面的需要往後移動所以所需要的效能就想對慢些
   2. Arrays is Removal =>
      1. pop : o(1) 也是 All of one 都是一樣的
      2. shift: o(n) 因為是移除在第一個所有後面的需要往後移動所以所需要的效能就想對慢些
   3. Arrays is Searching => 因為是一個一個尋找所以他是  o(n)
   4. Arrays is Accessing => 假設 長與短的 array 指定從第 6 比開始找 那不論長短使用時間是一樣的，所以也是 All of one 都是一樣的
