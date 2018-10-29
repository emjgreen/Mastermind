# Master Mind Game
# Emmett Greenberg

import random

# Initialize Constants

ALL_COLORS = "ROBGY"

RED = "R"
ORANGE = "O"
BLUE = "B"
GREEN = "G"
YELLOW = "Y"

# Set up game

# function to create secret code
def genRandomCode(size=4):
    code = []
    for i in range(size):
        code.append(random.choice(ALL_COLORS))
    return code
    # grade code function

print(genRandomCode())

