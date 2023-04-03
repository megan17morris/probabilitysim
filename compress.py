def compress( chars):
        """
        :type chars: List[str]
        :rtype: int
        """
        s=""
        #memz[0] is the current letter group, memz[1] is the number
        memz=[None]*2
        for letter in chars:
            # Need a condition to deal with first case
            if memz[0] is None:
                memz[0] = letter
               
                memz[1] = 1  
            #If not the first one, need to confirm if the letter saved is the same as char
            elif memz[0] is letter:
                #If the same, just add to the second
                memz[1] +=1
            #Last condition, must be new letter
            else:
                #Add to string
                s+=memz[0]
                
                if memz[1]> 1:
                    s+=str(memz[1])                
                memz[0]=letter
                
                memz[1] = 1
    # Now when we exit for loop need to print again
        s+=memz[0]
        if memz[1]> 1:
            s+=str(memz[1])
        chars=list(s)
        return (chars)
x=compress("aaabc")
print(x)