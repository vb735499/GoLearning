package main

import "fmt"
// 1. naked return & function
// func name(v {type}: also can be v1, v2 {type}) {return space: x, y int}{
//	return //it can be empty. if your return space is specify for some variable, return method will return your variable
//}

// 2.
// swap like python can be x, y = y, x

// combination 1. & 2.
func swap(x, y int) (y, x int) {
	return 
}

//3. variable declare 
//using "var vname1, vname2 {type}" to declare a list of variables
//also you can assign a value for this variable. Like python "var a, b {type}= {value1}, {value2}" 
var c, python, java bool
var a, b int= 5, 6

//3-1. short variable declare
//using "a, b := {v1}, {v2}" v1 & v2 it can be different types. 
c, d := 1, "hi"


func add(x, y int) int {
	return x + y
}


func main() {
	fmt.Println(add(42, 13))
	x, y := 5, 6
	fmt.Priintln(sfwap(x, y))
}
