while True:

    ano = input('digite um ano qualquer: ')
    print("o ano que vc digitou foi: ", ano)
    56
    sec = int(ano)/100


    if int(ano) < 101:
        sec = 1
    elif int(ano) % 100 == 0:
        sec = sec
    else:
        sec = sec + 1
        
    print("seculo:",int(sec))
