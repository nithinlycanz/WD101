def create():
    my_list = []  # Initialize an empty list
    print("Enter number of elements:")
    n = int(input())  # This line should ask for input

    print("Enter elements:")
    for i in range(n):
        x = int(input())  # Get input from user
        my_list.append(x)  # Append input to the list

    print(my_list)  # Print the list

# Call the function to make it execute
create()
