var names =["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]
for (var i = 0; i < 10; i++) {
   if(names[i].charAt(0)=="J") {
   	speak2(names[i]);
   }
   else {
   	speak1(names[i]);
   }
}
