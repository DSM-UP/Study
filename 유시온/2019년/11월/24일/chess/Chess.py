# 2019-11-11 Chess with Python By CutyApple
# The white(bottom) is upper and the black(top) is lower
# King, Queen, Bishop, Knight, Rook, Pawn
# Each block has some piece or NULL
# turn True's means Black's turn and turn False's means White's turn
# remainB and remainW mean their remaining pieces
# Table is filled with black and white color
# Castling, En passant, promotion, check, checkmate, touch-move, stalemate











#       This Project is previos version










import os

###########################################################
# variables' Space
turn = True
remain_b = 0
remain_w = 0

chess_width =  ['ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
chess_height = ['８', '７', '６', '５', '４', '３', '２', '１', 8, 7, 6, 5, 4, 3, 2, 1]
white_pieces = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜', '♟']
black_pieces = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖', '♙']
chess_table = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
]


def cls():
    print('\n'*50)


def table_to_code(table_x, table_y):    # table's coor change to array's coor
    array_x = None
    array_y = None

    for i in chess_width:
        if i == table_x:
            array_x = chess_width.index(i) - 7

    for i in chess_height:
        if i == table_y:
            array_y = chess_height[i - 9]

    print(f'{array_x}, {array_y}')
    return [array_x, array_y]


def code_to_table(array_x, array_y):  # array's coor change to table's coor
    table_x = chess_width[array_x + 7]
    table_y = chess_height[array_y + 7]

    print(f'[{table_x}, {table_y}]')

    return [table_x, table_y]


def set_table():  # before the start, setting the table
    for i in range(0, 10):
        for j in range(0, 10):
            chess_table[i][j] = '　'

    for i in range(1, 9):
        chess_table[0][i] = chess_width[i-1]
        chess_table[1][i] = black_pieces[i-1]

        chess_table[2][i] = black_pieces[8]
        chess_table[7][i] = white_pieces[8]
        chess_table[8][i] = white_pieces[i-1]

        chess_table[9][i] = chess_width[i-1]
        chess_table[i][0] = chess_height[i-1]
        chess_table[i][9] = chess_height[i-1]


def print_table():
    for i in range(0, 10):
        for j in range(0, 10):
            print(chess_table[i][j], end='')

        print('')


def turn_start(turn):
    coor = input('select your piece : ')
    x, y = coor.strip().split(',')
    x = x.strip()
    y = y.strip()
    y = int(y)
    print(f'x : {x}')
    print(f'y : {y}')
    check(chess_width, chess_height, x, y)


def check(pieces_x_list, pieces_y_list, x, y):
    x_index = None
    y_index = None

    print(chess_table[4][1])

    for i in pieces_x_list:
        if x == i:
            x_index = pieces_x_list.index(i) - 7

    for i in pieces_y_list:
        if y == i:
            y_index = pieces_y_list.index(i) - 7

    print(f'xIndex : {x_index}, yIndex : {y_index}')

    if x_index != None and y_index != None:
        if chess_table[y_index][x_index] == '　':
            print('There is no one')
        else :
            print(chess_table[y_index][x_index])
            for piece in piece_list:
                if piece.location == [y, x]:
                    print(f'x : {x}, y : {y}')


def chess():
    set_table()


class Piece:
    symbol = ''             #piece's symbol
    name = ''               #piece's unique name
    location = []           #current location (table)
    code_lo = []             #current loocation (code - array)
    direction = []          #moveable direction
    distance = 0            #moveable distance
    au_dis = 0                #auxiliary distance
    is_dying = False         #piece's checking

    def move(self, x, y):   #piece's moving
        print(x, y)

    def die(self):          #piece's dying
        print('die')
        self.is_dying = True

    def select(self):       #piece's selecting
        print(self)

    def checking(self):     #available check checking
        print(self)


class King(Piece):
    def __init__(self, x, y, name, symbol):
        self.distance = 1
        self.direction = [1, 2, 3, 4, 6, 7, 8, 9]
        self.location = [x, y]          #[a, 1]
        self.moved = False  #castling
        self.name = name
        self.symbol = symbol

        print(f'{self.symbol} : {self.location}')


class Queen(Piece):
    def __init__(self, x, y, name, symbol):
        self.distance = 7
        self.direction = [1, 2, 3, 4, 6, 7, 8, 9]
        self.location = [x, y]
        self.name = name
        self.symbol = symbol


class Bishop(Piece):
    def __init__(self, x, y, name, symbol):
        self.distance = 7
        self.direction = [1, 3, 7, 9]
        self.location = [x, y]
        self.name = name
        self.symbol = symbol


class Knight(Piece):
    def __init__(self, x, y, name, symbol):
        self.distance = 2
        self.direction = [1, 3, 7, 9]
        self.location = [x, y]
        self.au_dis = 1       #special moving
        self.name = name
        self.symbol = symbol


class Rook(Piece):
    def __init__(self, x, y, name, symbol):
        self.distance = 7
        self.direction = [2, 4, 6, 8]
        self.location = [x, y]
        self.moved = False  #castling
        self.name = name
        self.symbol = symbol


class Pawn(Piece):
    def __init__(self, x, y, name, symbol):
        self.distance = 1
        self.direction = [8]
        self.location = [x, y]
        self.au_dis = 1       #special moving
        self.moved = False  #first moving
        self.name = name
        self.symbol = symbol


###########################################################
# Below this line is the 『main function』.

chess()
print_table()

# 너무 하드코딩 아닌가?

bRookA = Rook('a', 8, 'bRookA', '♖')
bKnightA = Knight('b', 8, 'bKnightA', '♘')
bBishopA = Bishop('c', 8, 'bBishopA', '♗')
bQueen = Queen('e', 8, 'bQueen', '♔')
bKing = King('d', 8, 'bKing', '♕')
bBishopB = Bishop('f', 8, 'bBishopB', '♗')
bKnightB = Knight('g', 8, 'bKnightB', '♘')
bRookB = Rook('h', 8, 'bRookB', '♖')

bPawnA = Pawn('a', 7, 'bPawnA', '♙')
bPawnB = Pawn('b', 7, 'bPawnB', '♙')
bPawnC = Pawn('c', 7, 'bPawnC', '♙')
bPawnD = Pawn('d', 7, 'bPawnD', '♙')
bPawnE = Pawn('e', 7, 'bPawnE', '♙')
bPawnF = Pawn('f', 7, 'bPawnF', '♙')
bPawnG = Pawn('g', 7, 'bPawnG', '♙')
bPawnH = Pawn('h', 7, 'bPawnH', '♙')

wPawnA = Pawn('a', 2, 'wPawnA', '♟')
wPawnB = Pawn('b', 2, 'wPawnB', '♟')
wPawnC = Pawn('c', 2, 'wPawnC', '♟')
wPawnD = Pawn('d', 2, 'wPawnD', '♟')
wPawnE = Pawn('e', 2, 'wPawnE', '♟')
wPawnF = Pawn('f', 2, 'wPawnF', '♟')
wPawnG = Pawn('g', 2, 'wPawnG', '♟')
wPawnH = Pawn('h', 2, 'wPawnH', '♟')

wRookA = Rook('a', 1, 'wRookA', '♜')
wKnightA = Knight('b', 1, 'wKnightA', '♞')
wBishopA = Bishop('c', 1, 'wBishopA', '♝')
wQueen = Queen('e', 1, 'wQueen', '♚')
wKing = King('d', 1, 'wKing', '♛')
wBishopB = Bishop('f', 1, 'wBishopB', '♝')
wKnightB = Knight('g', 1, 'wKnightB', '♞')
wRookB = Rook('h', 1, 'wRookB', '♜')

piece_list = [
    bRookA, bKnightA, bBishopA, bQueen, bKing, bBishopB, bKnightB, bRookA,
    bPawnA, bPawnB, bPawnC, bPawnD, bPawnE, bPawnF, bPawnG, bPawnH,
    wPawnA, wPawnB, wPawnC, wPawnD, wPawnE, wPawnF, wPawnG, wPawnH,
    wRookA, wKnightA, wBishopA, wQueen, wKing, wBishopB, wKnightB, wRookB,
]

turn_start(True)

cls()

print_table()