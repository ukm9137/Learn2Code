import random

hemligt_tal = random.randint(1, 100)
antal_forsok = 0

while True:
    gissning = int(input("Gissa ett tal mellan 1 och 100: "))
    antal_forsok += 1

    if gissning < hemligt_tal:
        print("För lågt!")
    elif gissning > hemligt_tal:
        print("För högt!")
    else:
        print(f"Rätt! Du gissade på {antal_forsok} försök.")
        break