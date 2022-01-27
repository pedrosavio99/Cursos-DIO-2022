partidas = ((1,2),(3,2),(1,1),(2,4),(4,4),(4,1),(3,2),(2,3),(1,1),(1,3))

print(partidas[1][0])
print(len(partidas))

i = 0

pontos= 0

while i<len(partidas):
    print(partidas[i])
    if partidas[i][0]>partidas[i][1]:
        print("ganhamos")
        pontos = pontos + 3
    elif partidas[i][0]<partidas[i][1]:
        print("perdemos")
    else:
        print("empatamos")
        pontos = pontos + 1
    i = i+1
    
print("Pontuação do time: ", pontos)
    
