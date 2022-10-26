import random
#This is just a run once simulator for monty hall, to create a function
#opt. set doors

print("This is the Monty Hall Problem")
print("There are 3 closed doors. ")
print("Behind two of the doors, there are goats. Behind one of them there is a car. You want the car. ")
print("The order of the goats and the car is randomized.")
#1. Randomize car for 1 through 3.
#goat list is internal, wind it down to help with selecting which door to view
#door list is external, we pull from it the door selected and the door revealed
#to know what door they can switch to
goatlist= [1,2,3]
doorlist=[1,2,3]
cardoor = random.randint(1,3)
# have an array for 1,3 where i remove the car door, then we can randomize on this array for opening door
#2. Prompt user to pick a door- validate, must be a number 1-3 and integer

def pickDoor(message):
    while True:
        try:
            userInput = int(input(message))
        except ValueError:
            print ("Not an integer! Try Again.")
            continue
        if userInput > 3 or userInput < 1:
            print("Door choice must be between 1 and 3. Try again")
            continue
        else:
            return userInput
            break

doorchoice=pickDoor("Choose a door: ")
doorlist.remove(doorchoice)
if doorchoice == cardoor:
    correctchoice=True
else:
    correctchoice=False

#3. If goat door, open other goat door. If not goat door, open random other door
if correctchoice==False:
    #we can't choose the door they chose for goat door
    goatlist.remove(doorchoice)
    #original choice will be removed
    print("Door " + str(goatlist[0]) + " is a goat.")
else:
    randomchoice=goatlist[random.randint(0,1)]
    print ("Door " + str(randomchoice[0])+" is a goat")
    doorlist.remove(randomchoice)
    print(str(doorlist))

#4. Prompt to stay or switch.
while True: 
    try:
        secondchoice=int(input("Would you like to Stay with your original door (1) or Switch to the remaining door (2)? "))
    except ValueError:
        print("Not an integer! Try again.")
        continue
    if secondchoice < 1 or secondchoice > 2:
        print("You must enter either 1 or 2")
        continue
    else:
        break
#5 Reveal
if secondchoice == 1 and correctchoice==True:
    print("You win a car!")
elif secondchoice == 2 and correctchoice == False:
    print("You win a car!")
else:
    print("i guess you get this goat")
    

#separate function to this randomly many times, sticking with stay or switch option

