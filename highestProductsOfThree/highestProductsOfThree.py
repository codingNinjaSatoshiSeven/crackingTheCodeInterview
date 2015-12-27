# Given a list_of_ints, find the highest_product you can get from three of the integers.
# The input list_of_ints will always have at least three integers.

#solution 1: O(n) time complexity, O(1) space complexity
def find_highest_product_of_three(list):
   	"This finds the highest product from three integers from an array of integers"
   	max1=float("-inf")
   	max2=float("-inf")
   	max3=float("-inf")
   	min1=float("inf")
   	min2=float("inf")
   	min3=float("inf")

   	for i in range(len(list)):
   		if (list[i] > max1):
   			max3=max2
   			max2= max1
   			max1=list[i]
   		elif (list[i] >max2):
   			max3=max2
   			max2=list[i]
   		elif (list[i] >max3):
   			max3=list[i]

   		if (list[i] <min1):
   			min3=min2
   			min2=min1
   			min1=list[i]
   		elif (list[i] <min2):
   			min3=min2
   			min2=list[i]
   		elif (list[i] <min3):
   			min3=list[i]
   	product = max(max1*max2*max3, min1*min2*max1)
   	print product
   	return product


find_highest_product_of_three([1,2,3,4,5]) #60
find_highest_product_of_three([3,4,1,5,2]) #60, order doesn't matter
find_highest_product_of_three([1,-1,0,2,-5,7]) #35
find_highest_product_of_three([-1,-3,-5, 0]) #0
find_highest_product_of_three([-1,-3,-5, 0, 1]) #15
find_highest_product_of_three([-1,-3,-5, -11]) #-15
find_highest_product_of_three([-1,-3,-5, 0, 1, 7]) #105
find_highest_product_of_three([-1,-3,-5, 0, 1, 7, 8]) #120
find_highest_product_of_three([-1,-3,-5, 0, 1, 7, 8, 9]) #504
