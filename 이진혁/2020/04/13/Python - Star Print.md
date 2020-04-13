## Python - Star Print

- 별찍기 알고리즘을 오랜만에 생각하려고 하니 종이가 없으니 생각보다 힘들다는 것을 알게 되었다.
  하지만 종이를 가져오기가 귀찮으므로 머리로 생각하면서 했는데 은근히 어려웠다.
  파이썬의 중첩 for문을 이용하여 별찍기를 진행해보았다.

  ```python
  # 사각형 별찍기
  for i in range(5):
      for j in range(5):
          print('*', end='')
      print()
  
  # *****
  # *****
  # *****
  # *****
  # *****
  
  # 계단형 별찍기-1
  for i in range(5):
      for j in range(5):
          if j <= i:
              print('*', end='')
      print()
  
  # *
  # **
  # ***
  # ****
  # *****
  
  # 계단형 별찍기-2
  for i in range(5):
      for j in range(5):
          if j < 5-i:
              print('*')
  	print()
  
  # *****
  # ****
  # ***
  # **
  # *
  
  # 계단형 별찍기-3
  for i in range(5):
      for j in range(5):
          if j < 4-i:
              print(' ', end='')
          else:
              print('*', end='')
      print()
      
  #     *
  #    **
  #   ***
  #  ****
  # *****
  
  # 계단형 별찍기-4
  for i in range(5):
      for j in range(5):
          if j >= i:
              print('*', end='')
  		else:
              print(' ', end='')
  	print()
  
  # *****
  #  ****
  #   ***
  #    **
  #     *
  
  # 대각선 별찍기
  for i in range(5):
      for j in range(5):
          if j == i:
              print('*', end='')
          else:
              print(' ', end='')
  
  # *
  #  *
  #   *
  #    *
  #     *
  ```