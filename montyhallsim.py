#simulator to do many at once
import random
def montyhall(n, goats = 3):
    # the goal here is to return a number of rounds where switch would have been the best move
    #computer will randomly generate the car door, the picked door, 
    switchcount = 0
    staycount = 0
    #goats is the number of doors
    # n is the number of trials
    for i in range(n):
        cardoor = int(random.randint(1,goats))
        #remove the choice from door list since she won't be able to switch to is
        doorchoice = int(random.randint(1,goats))
        if cardoor != doorchoice:
            switchcount = switchcount + 1
        else:
            staycount = staycount + 1
    switchcountratio = switchcount / n
    return switchcountratio


        

while True:
    try:
        n = int(input("How many times would you like to simulate the Monty Hall Problem? "))
        goats = int(input ("How many doors should there be? "))
    except ValueError:
        print("Not an integer! Try again.")
        continue
    if goats < 3:
        print("Must have at least 3 doors. Try again.")
        continue
    elif n < 1:
        print("Simulation must be ran at least one time")
    else:
        break
switching= montyhall(n, goats)
print( "Your switch percent was " + str(100*switching)+"%")