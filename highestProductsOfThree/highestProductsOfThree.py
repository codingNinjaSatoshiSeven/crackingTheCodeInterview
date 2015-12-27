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

# Solution: There are at least two great answers:
#Keep track of the highest_2 and lowest_2 (most negative) numbers. 
#If the current number times some combination of those is higher than the current highest_product_of_three, 
#we have a new highest_product_of_three! Which combinations of highest_2, lowest_2, and current must we test? We'll leave that as an exercise.
#Keep track of the highest_product_of_2 and lowest_product_of_2 (could be a low negative number). If the current number times one of those is higher than the current highest_product_of_three, 
#we have a new highest_product_of_three!
#We'll go with (2). It ends up being slightly cleaner than (1), though they both work just fine.
#How do we keep track of the highest_product_of_2 and lowest_product_of_2 at each iteration? 
#(Hint: we may need to also keep track of something else.)
#We also keep track of the lowest number and highest number. If the current number times the current highest—or the current lowest, 
#if current is negative—is greater than the current highest_product_of_2, we have a new highest_product_of_2. Same for lowest_product_of_2.
#So at each iteration we're keeping track of and updating:

#highest_product_of_three
#highest_product_of_2
#highest
#lowest_product_of_2
#lowest
#We use a greedy ↴ approach to solve the problem in one pass. At each iteration we keep track of:

#highest_product_of_three
#highest_product_of_2
#highest
#lowest_product_of_2
#lowest
#When we reach the end, the highest_product_of_three is our answer. 
#We maintain the others because they're necessary for keeping the highest_product_of_three up to date as we walk through the list. 
#At each iteration, the highest_product_of_three is the highest of:

#the current highest_product_of_three
#current * highest_product_of_2
#current * lowest_product_of_2 (if current and lowest_product_of_2 are both low negative numbers, this product is a high positive number).

def highest_product_of_3(list_of_ints):
    if len(list_of_ints) < 3:
        raise Exception('Less than 3 items!')

    # We're going to start at the 3rd item (at index 2)
    # so pre-populate highests and lowests based on the first 2 items.
    # we could also start these as None and check below if they're set
    # but this is arguably cleaner
    highest = max(list_of_ints[0], list_of_ints[1])
    lowest =  min(list_of_ints[0], list_of_ints[1])

    highest_product_of_2 = list_of_ints[0] * list_of_ints[1]
    lowest_product_of_2  = list_of_ints[0] * list_of_ints[1]

    # except this one--we pre-populate it for the first /3/ items.
    # this means in our first pass it'll check against itself, which is fine.
    highest_product_of_three = list_of_ints[0] * list_of_ints[1] * list_of_ints[2]

    # walk through items, starting at index 2
    for current in list_of_ints[2:]:

        # do we have a new highest product of 3?
        # it's either the current highest,
        # or the current times the highest product of two
        # or the current times the lowest product of two
        highest_product_of_three = max(
            highest_product_of_three,
            current * highest_product_of_2,
            current * lowest_product_of_2)

        # do we have a new highest product of two?
        highest_product_of_2 = max(
            highest_product_of_2,
            current * highest,
            current * lowest)

        # do we have a new lowest product of two?
        lowest_product_of_2 = min(
            lowest_product_of_2,
            current * highest,
            current * lowest)

        # do we have a new highest?
        highest = max(highest, current)

        # do we have a new lowest?
        lowest = min(lowest, current)

    return highest_product_of_three
