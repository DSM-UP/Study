def maxSum(cards, cardsLen, maxNum):
    maxSum = -1
    for i in range(0, cardsLen):
        for j in range(i+1, cardsLen):
            for k in range(j+1, cardsLen):
                sums = cards[i] + cards[j] + cards[k]

                if sums > maxNum:
                    continue
                elif sums == maxNum:
                    return sums
                else:
                    if sums > maxSum:
                        maxSum = sums
    return maxSum

def getMaxSum():
    cardCount, maxNum = list(map(int, input().split(' ')))
    cards = sorted(list(map(int, input().split(' '))))
    cardsLen = cards.__len__()

    print(maxSum(cards, cardsLen, maxNum))

getMaxSum()
