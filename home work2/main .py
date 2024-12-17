# number = int (input("input number:"))
# result = 0
# temp = number
# while temp!=0:
#     digit = temp % 10
#     result = result+digit**3
#     temp = temp//10
# if number == result:
#     print(number , "is an armstrong number")
# else:
#     print(number, "is not an armstrong number")
# activty 2
def print_factors(number):
    print("The factors of","number","are:")
    for i in range(1, number + 1):
        if number % i == 0:
            print(i)
number = int(input("Enter number"))
print_factors(number)