# Prompt: You have a list of integers, 
# and for each index you want to find the product of every integer except the integer at that index
# don't use any division

# solution 1, O(n^2) time complexity, O(n)* space complexity (returning an array)
def get_products_of_all_ints_except_at_index(arr):
   	"This finds the products of all ints in an array except at index"
   	products = []
	for i in range(len(arr)):
   		product = 1;
		for j in range(len(arr)):
   			if i != j :
   				product *= arr[j]
   		products.append(product)
   	print(products)
   	return products

get_products_of_all_ints_except_at_index([1, 7, 3, 4])

# solution 2, O(n) time complexity, O(n) space complexity, required
def get_products_of_all_ints_except_at_index_2(arr):
   	"This finds the products of all ints in an array except at index"
   	products_sub1 = [1]
   	products_sub2 = [1]
   	products = []
	for i in range(len(arr)):
   		if i != 0:
   			products_sub1.append(products_sub1[i-1] * arr[i-1])

   	arr2 = arr[:]
   	arr2.reverse()
   	for i in range(len(arr2)):
   		if i != 0:
   			products_sub2.append(products_sub2[i-1] * arr2[i-1])
   	products_sub2.reverse()


   	for i in range(len(arr)):
   		products.append(products_sub1[i] * products_sub2[i])
   	print (products)
   	return products
get_products_of_all_ints_except_at_index_2([1, 7, 3, 4])


#official solution
def get_products_of_all_ints_except_at_index_official(int_list):

    # we make a list with the length of the input list to
    # hold our products
    products_of_all_ints_except_at_index = [None] * len(int_list)

    # for each integer, we find the product of all the integers
    # before it, storing the total product so far each time
    product_so_far = 1
    i = 0
    while i < len(int_list):
        products_of_all_ints_except_at_index[i] = product_so_far
        product_so_far *= int_list[i]
        i += 1

    # for each integer, we find the product of all the integers
    # after it. since each index in products already has the
    # product of all the integers before it, now we're storing
    # the total product of all other integers
    product_so_far = 1
    i = len(int_list) - 1
    while i >= 0:
        products_of_all_ints_except_at_index[i] *= product_so_far
        product_so_far *= int_list[i]
        i -= 1

    return products_of_all_ints_except_at_index