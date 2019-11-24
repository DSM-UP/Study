# 2019-11-11 Chess with Python By CutyApple
# The white(bottom) is upper and the black(top) is lower
# King, Queen, Bishop, Knight, Rook, Pawn
# Each block has some piece or NULL
# turn True's means Black's turn and turn False's means White's turn
# remainB and remainW mean their remaining pieces
# Table is filled with black and white color
# Castling, En passant, promotion, check, checkmate, touch-move, stalemate
# Bottom : False | Top : True
##########################################################


class Piece:
    symbol = ''             # piece's symbol
    name = ''               # piece's unique name
    location = []           # current location (table)
    direction = [[]]          # moveable direction
    distance = 0            # moveable distance
    is_dying = False         # piece's checking
    moved = True            # piece's moving check
    team = ''               # piece's team
    species = ''            # piece's species    ex) pawn, rook

    def die(self):          # piece's dying
        global game_end

        if self.species == 'King':
            if self.team:
                print(f'White team\'s King dead!')
                print(f'Black team win!')
            else:
                print(f'Black team\'s King dead!')
                print(f'White team win!')
            game_end = True
        self.location = [-1, -1]
        self.is_dying = True


class King(Piece):
    def __init__(self, x, y, name, symbol, team, species):
        self.distance = 1
        self.direction = [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]]
        self.location = [x, y]          # [a, 1]
        self.moved = False  # castling
        self.name = name
        self.symbol = symbol
        self.team = team
        self.species = species


class Queen(Piece):
    def __init__(self, x, y, name, symbol, team, species):
        self.distance = 7
        self.direction = [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]]
        self.location = [x, y]
        self.name = name
        self.symbol = symbol
        self.team = team
        self.species = species


class Bishop(Piece):
    def __init__(self, x, y, name, symbol, team, species):
        self.distance = 7
        self.direction = [[-1, 1], [0, 0], [1, 1], [0, 0], [0, 0], [-1, -1], [0, 0], [1, -1]]
        self.location = [x, y]
        self.name = name
        self.symbol = symbol
        self.team = team
        self.species = species


class Knight(Piece):
    def __init__(self, x, y, name, symbol, team, species):
        self.distance = 2
        self.direction = [[0, 0], [0, 1], [0, 0], [-1, 0], [1, 0], [0, 0], [0, -1], [0, 0]]
        self.location = [x, y]
        self.name = name
        self.symbol = symbol
        self.team = team
        self.species = species


class Rook(Piece):
    def __init__(self, x, y, name, symbol, team, species):
        self.distance = 7
        self.direction = [[0, 0], [0, 1], [0, 0], [-1, 0], [1, 0], [0, 0], [0, -1], [0, 0]]
        self.location = [x, y]
        self.moved = False  # castling
        self.name = name
        self.symbol = symbol
        self.team = team
        self.species = species


class Pawn(Piece):
    def __init__(self, x, y, name, symbol, team, directions, species):
        self.distance = 1
        self.direction = directions
        self.location = [x, y]
        self.moved = False    # first moving
        self.name = name
        self.symbol = symbol
        self.team = team
        self.species = species
        self.turn = 0


game_end = False

wPawnDir = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, 0]]
bPawnDir = [[0, 0], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]

bRookA = Rook('a', 8, 'bRookA', '♖', True, 'Rook')
bKnightA = Knight('b', 8, 'bKnightA', '♘', True, 'Knight')
bBishopA = Bishop('c', 8, 'bBishopA', '♗', True, 'Bishop')
bQueen = Queen('e', 8, 'bQueen', '♔', True, 'Queen')
bKing = King('d', 8, 'bKing', '♕', True, 'King')
bBishopB = Bishop('f', 8, 'bBishopB', '♗', True, 'Bishop')
bKnightB = Knight('g', 8, 'bKnightB', '♘', True, 'Knight')
bRookB = Rook('h', 8, 'bRookB', '♖', True, 'Rook')

bPawnA = Pawn('a', 7, 'bPawnA', '♙', True, bPawnDir, 'Pawn')
bPawnB = Pawn('b', 7, 'bPawnB', '♙', True, bPawnDir, 'Pawn')
bPawnC = Pawn('c', 7, 'bPawnC', '♙', True, bPawnDir, 'Pawn')
bPawnD = Pawn('d', 7, 'bPawnD', '♙', True, bPawnDir, 'Pawn')
bPawnE = Pawn('e', 7, 'bPawnE', '♙', True, bPawnDir, 'Pawn')
bPawnF = Pawn('f', 7, 'bPawnF', '♙', True, bPawnDir, 'Pawn')
bPawnG = Pawn('g', 7, 'bPawnG', '♙', True, bPawnDir, 'Pawn')
bPawnH = Pawn('h', 7, 'bPawnH', '♙', True, bPawnDir, 'Pawn')

wPawnA = Pawn('a', 2, 'wPawnA', '♟', False, wPawnDir, 'Pawn')
wPawnB = Pawn('b', 2, 'wPawnB', '♟', False, wPawnDir, 'Pawn')
wPawnC = Pawn('c', 2, 'wPawnC', '♟', False, wPawnDir, 'Pawn')
wPawnD = Pawn('d', 2, 'wPawnD', '♟', False, wPawnDir, 'Pawn')
wPawnE = Pawn('e', 2, 'wPawnE', '♟', False, wPawnDir, 'Pawn')
wPawnF = Pawn('f', 2, 'wPawnF', '♟', False, wPawnDir, 'Pawn')
wPawnG = Pawn('g', 2, 'wPawnG', '♟', False, wPawnDir, 'Pawn')
wPawnH = Pawn('h', 2, 'wPawnH', '♟', False, wPawnDir, 'Pawn')

wRookA = Rook('a', 1, 'wRookA', '♜', False, 'Rook')
wKnightA = Knight('b', 1, 'wKnightA', '♞', False, 'Knight')
wBishopA = Bishop('c', 1, 'wBishopA', '♝', False, 'Bishop')
wQueen = Queen('e', 1, 'wQueen', '♚', False, 'Queen')
wKing = King('d', 1, 'wKing', '♛', False, 'King')
wBishopB = Bishop('f', 1, 'wBishopB', '♝', False, 'Bishop')
wKnightB = Knight('g', 1, 'wKnightB', '♞', False, 'Knight')
wRookB = Rook('h', 1, 'wRookB', '♜', False, 'Rook')

piece_list = [
    bRookA, bKnightA, bBishopA, bKing, bQueen, bBishopB, bKnightB, bRookB,
    bPawnA, bPawnB, bPawnC, bPawnD, bPawnE, bPawnF, bPawnG, bPawnH,
    wPawnA, wPawnB, wPawnC, wPawnD, wPawnE, wPawnF, wPawnG, wPawnH,
    wRookA, wKnightA, wBishopA, wKing, wQueen, wBishopB, wKnightB, wRookB,
]

###########################################################
# variables' Space
turn = False
remain_b = 0
remain_w = 0
black = ''
white = ''

# promotion
black_list = ['♖', '♘', '♗', '♔']
white_list = ['♜', '♞', '♝', '♚']
change_list = [1, 2, 3, 4]

# en passent
enpassant_list = []

# check
check_list = [[]]
piece_move_list = []
enemy_attack_all = []
enemy_list = []

chess_width = ['ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
chess_height = ['８', '７', '６', '５', '４', '３', '２', '１', 8, 7, 6, 5, 4, 3, 2, 1]
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

table_color = [[]]
colors = [[]]
table_color.pop(0)

pawn_list = []


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

    return [array_x, array_y]


def code_to_table(array_x, array_y):  # array's coor change to table's coor
    table_x = chess_width[array_x + 7]
    table_y = chess_height[array_y + 7]

    return [table_x, table_y]


def re_table():   # table modify
    for piece in piece_list:
        x, y = piece.location

        if not x == y == -1:
            code_list = table_to_code(x, y)
            code_x, code_y = code_list
            chess_table[code_y][code_x] = piece.symbol


def set_table():  # before the start, setting the table
    for i in range(0, 10):
        for j in range(0, 10):
            chess_table[i][j] = '　'

    for i in range(1, 9):
        chess_table[0][i] = chess_width[i - 1]
        chess_table[9][i] = chess_width[i - 1]
        chess_table[i][0] = chess_height[i - 1]
        chess_table[i][9] = chess_height[i - 1]

    for piece in piece_list:
        x, y = piece.location
        code_list = table_to_code(x, y)
        code_x, code_y = code_list
        chess_table[code_y][code_x] = piece.symbol


def table_color_set(color):
    x_index, y_index, indexes = [], [], []
    if color != [[]] and color != []:
        for i in color:
            x_index.append(i[0])
            y_index.append(i[1])

    for i in range(0, int(len(x_index))):
        indexes.append([x_index[i], y_index[i]])

    return indexes


def print_table(color):  # print the current table
    if game_end:
        return

    global black
    global white

    cls()
    indexes = table_color_set(color)

    if turn:
        print(f'\x1b[0;32;0m {black} team\'s turn \x1b[0m')
    else:
        print(f'\x1b[0;31;0m {white} team\'s turn \x1b[0m')

    for i in range(0, 10):
        for j in range(0, 10):
                check = True
                for index in indexes:
                    if index == [j, i]:
                        for piece in piece_list:
                            table_x, table_y = code_to_table(j, i)
                            table_y = int(table_y)
                            if piece.location == [table_x, table_y]:
                                if piece.team != turn:
                                    print(f'\x1b[0;{find_color(j, i)};45m{chess_table[i][j]}\x1b[0m', end='')
                                    check = False
                        if check:
                            print(f'\x1b[0;{find_color(j, i)};46m{chess_table[i][j]}\x1b[0m', end='')
                            check = False

                if check:
                    if i == 0 or j == 0 or i == 9 or j == 9:
                        print(f'{chess_table[i][j]}', end='')
                    elif (j+i) % 2 == 0:
                        print(f'\x1b[0;{find_color(j, i)};40m{chess_table[i][j]}\x1b[0m', end='')
                    else:
                        print(f'\x1b[0;{find_color(j, i)};0m{chess_table[i][j]}\x1b[0m', end='')

        print('')


def inputing(word):
    while True:
        try:
            coor = input(word)
            x, y = coor.strip().split(',')
            x = x.strip()
            y = y.strip()

            y = int(y)
            if not (y in chess_height):
                y = '+'
            if not (x in chess_width):
                y = '+'
            y = int(y)
            break

        except ValueError:
            print(f'ERROR : wrong input.')

    return [x, y]


def selecting(x, y):
    global colors

    y = int(y)
    x_index, y_index = table_to_code(x, y)
    y_index = int(y_index)
    checks = False
    found_piece = find_piece(x, y)

    color_piece = color_add(found_piece, False, False, False)

    select_move_check(found_piece)

    indexes = table_color_set(colors)

    if chess_table[y_index][x_index] == '　':
        print_table(colors)
        print('There is no one')
        turn_start()
    elif indexes is []:
        print_table(colors)
        print('It can\'t move there')
        turn_start()
    elif find_piece(x, y).team != turn:
        color_del()
        print_table(colors)
        print('It isn\'t your team')
        turn_start()
    else:
        for piece in piece_list:
            if piece.location == [x, y]:
                if color_piece.species == 'Pawn':
                    color_piece.moved = True
                while True:
                    print_table(colors)
                    if checks:
                        print('ERROR : wrong choice.')
                        checks = False
                    print(f'Your choice : [{x}, {y}] : {chess_table[y_index][x_index]}')
                    indexes = table_color_set(colors)
                    input_x, input_y = inputing('select the coordinates : ')
                    x, y = table_to_code(input_x, input_y)
                    y = int(y)

                    if [x, y] in indexes:
                        break
                    else:
                        checks = True

                print(f'Your choice : [{input_x}, {input_y}]')

                move(input_x, input_y, piece)
                is_check(piece)


def find_color(input_x, input_y):
    input_x, input_y = code_to_table(input_x, input_y)
    piece = find_piece(input_x, input_y)
    if piece is None:
        return 0
    elif piece.team:
        return 32
    return 31


def find_piece(input_x, input_y):
    for piece in piece_list:
        if piece.location == [input_x, input_y]:
            return piece


# table_color에 들어있는 쓰레기 값 제거
def color_del():
    global table_color
    for i in range(0, len(table_color)):
        table_color.pop()


def color_add(piece, check_list_checking, att_checking, get_att_range):
    color_del()

    if piece is None:
        return

    print(f'{piece.name} : {att_checking}')

    x, y = piece.location
    x, y = table_to_code(x, y)
    x = int(x)
    y = int(y)
    for direction in piece.direction:
        dir_x, dir_y = direction
        if not dir_x == dir_y == 0:
            for i in range(0, piece.distance+1):
                check = True
                move_x = x + i * dir_x
                move_y = y + i * dir_y

                # Is it a Knight?
                if 'Knight' in piece.species:
                    ys = [-1, 1, -2, 2, -2, 2, -1, 1]
                    xs = [-2, -2, -1, -1, 1, 1, 2, 2]
                    for j in range(0, 8):
                        check = True
                        move_x = xs[j] + x
                        move_y = ys[j] + y

                        if move_x < 1 or move_y < 1 or move_x > 8 or move_y > 8:
                            check = False

                        if check:
                            move_c_x, move_c_y = code_to_table(move_x, move_y)
                            move_piece = find_piece(move_c_x, move_c_y)
                            if move_piece is not None:
                                if move_piece.team == turn:
                                    check = False

                            if att_checking:
                                check = True

                            if check:
                                if not [move_x, move_y] in table_color:
                                    if att_checking:
                                        table_color.append([move_x, move_y, piece])
                                    else:
                                        table_color.append([move_x, move_y])
                    check = False

                if check:
                    # Is there the wall?
                    if move_x < 1 or move_y < 1 or move_x > 8 or move_y > 8:
                        break

                    # Is it a Pawn?
                    if 'Pawn' in piece.species:
                        if not piece.team:
                            sub = -1
                        else:
                            sub = 1

                        for j in range(-1, 2):
                            if move_x + j > 8:
                                break
                            table_x, table_y = code_to_table(move_x + j, move_y + sub)
                            pawn_someone = find_piece(table_x, table_y)

                            if j == 0 and pawn_someone is not None:
                                continue

                            if j != 0 and pawn_someone is None:
                                if piece.team:
                                    pawn_x, pawn_y = piece.location
                                    pawn_y = int(pawn_y)
                                    if pawn_y == 4:
                                        enpassant(piece)
                                else:
                                    pawn_x, pawn_y = piece.location
                                    pawn_y = int(pawn_y)
                                    if pawn_y == 5:
                                        enpassant(piece)
                                continue

                            elif j != 0 and pawn_someone is not None:
                                if pawn_someone.team == piece.team:
                                    continue
                            if att_checking:
                                table_color.append([move_x + j, move_y + sub, piece])
                            else:
                                table_color.append([move_x + j, move_y + sub])

                        if not piece.moved:
                            if att_checking:
                                table_color.append([move_x, (move_y + sub * 2), piece])
                            else:
                                table_color.append([move_x, (move_y + sub * 2)])
                            pawn_list.append(piece)
                            break

                    # Is there something?
                    if i != 0 and chess_table[move_y][move_x] != '　':
                        for something in piece_list:
                            t_move_x, t_move_y = code_to_table(move_x, move_y)
                            t_move_y = int(t_move_y)
                            if something.location == [t_move_x, t_move_y]:
                                if something.team != piece.team:
                                    if att_checking:
                                        table_color.append([move_x, move_y, piece])
                                    else:
                                        table_color.append([move_x, move_y])
                        break

                    if i != 0:
                        if att_checking:
                            table_color.append([move_x, move_y, piece])
                        else:
                            table_color.append([move_x, move_y])

    if get_att_range:
        att_list = list_copy(table_color)
        list_del(table_color)
        return att_list

    if att_checking:
        global enemy_attack_all
        ace = list_copy(table_color)
        enemy_attack_all.append(ace)

    if check_list_checking:
        global check_list
        check_list = list_copy(table_color)
        # color_del()

    if not att_checking and not check_list_checking:
        global colors
        colors = list_copy(table_color)
        print_table(colors)
    return piece


def list_copy(list_a):
    list_b = []
    for a in range(len(list_a)):
        list_b.append(list_a[a])
    return list_b

    
def move(x, y, piece):
    pre_x, pre_y = piece.location
    pre_x, pre_y = table_to_code(pre_x, pre_y)

    pre_x = int(pre_x)
    pre_y = int(pre_y)
    chess_table[pre_y][pre_x] = '　'

    attaked_piece = find_piece(x, y)

    if 'Pawn' in piece.species:
        # en passent
        for item in enpassant_list:
            item_x, item_y = item
            if piece.team:
                sub = -1
            else:
                sub = 1

            new_x, new_y = table_to_code(x, y)
            if item_x == new_x and item_y == new_y:
                chess_table[new_y+sub][new_x] = '　'
                new_x, new_y = code_to_table(new_x, new_y+sub)
                found_piece = find_piece(new_x, new_y)
                found_piece.location = [-1, -1]
                break
                
        # promotion
        if y == 8 or y == 1:
            j = 1
            if piece.team:
                for i in black_list:
                    print(f'{j}.{i}', end='  ')
                    j += 1
            else:
                for i in white_list:
                    print(f'{j}.{i}', end='  ')
                    j += 1
            while True:
                change_num = input('\nchoose the change piece : ')
                if change_num.isdigit():
                    change_num = int(change_num)
                    if change_num in change_list:
                        promotion(change_num, piece)
                        break

                print(f'wrong select!')

    if attaked_piece is not None:
        attaked_piece.die()
        if 'King' in attaked_piece.name:
            attaked_piece.die()

    x, y = table_to_code(x, y)

    for color_coor in colors:

        coor_x, coor_y = color_coor
        if x == coor_x and y == coor_y:
            x, y = code_to_table(x, y)
            piece.location = [x, y]

    for i in range(0, len(colors)):
        colors.pop()

    re_table()


def enpassant_del():
    for i in range(len(enpassant_list)):
        enpassant_list.pop()


def enpassant(piece):
    x, y = piece.location
    y = int(y)
    for i in range(-1, 2):
        if i != 0:
            x_index = chess_width.index(x)
            if 7 < x_index + i < 16:
                found_piece = find_piece(chess_width[x_index+i], y)
                if found_piece is not None:
                    if found_piece.species == 'Pawn' and found_piece.team != piece.team:
                        if found_piece.turn == 1:
                            table_color.append([x_index+i-7, 8-y])
                            enpassant_list.append([x_index+i-7, 8-y])


def promotion(change_index, piece):
    check = False

    for found_piece in piece_list:
        if piece.team:
            if found_piece.symbol == black_list[change_index-1] and found_piece.team == piece.team:
                check = True
        else:
            if found_piece.symbol == white_list[change_index-1] and found_piece.team == piece.team:
                check = True

        if check:
            piece.symbol = found_piece.symbol
            piece.direction = found_piece.direction
            piece.distance = found_piece.distance
            piece.species = found_piece.species
            break


def select_move_check(piece):
    king_x, king_y = enemy_list_init()
    can_att(piece, king_x, king_y)

    list_del(enemy_attack_all)


def enemy_list_init():
    global enemy_list
    global enemy_attack_all
    global colors

    if turn:
        king = piece_list[3]
    else:
        king = piece_list[27]

    king_x, king_y = king.location
    king_x, king_y = table_to_code(king_x, king_y)

    list_del(enemy_list)
    enemy_list = get_enemy_list()
    enemy_attack_all_init(enemy_list)

    return king_x, king_y


def enemy_attack_all_init(enemy_lists):
    for enemy in enemy_lists:
        if enemy is not None:
            color_add(enemy, False, True, False)


def get_enemy_list():
    global enemy_list
    i = -1

    list_del(enemy_list)

    for enemy in piece_list:
        i += 1
        if i < 16 and not turn:
            if enemy.is_dying:
                # enemy_lists.append(None)
                continue
            else:
                enemy_list.append(enemy)
            continue
        elif i >= 16 and turn:
            if enemy.is_dying:
                # enemy_lists.append(None)
                continue
            else:
                enemy_list.append(enemy)
            continue

    return enemy_list


def can_att(piece, king_x, king_y):
    checking_list = who_is_check(king_x, king_y)
    att_range = get_att_range(piece)
    can_range = []

    for checks in checking_list:
        for att in att_range:
            att_x, att_y = att
            att = code_to_table(att_x, att_y)
            print(f'{checks.location} : {att}')
            if checks.location == att:
                print(f'-------wwww--------')
                can_range.append(att)

    if not can_range:
        print(f'********** 1) This piece can\'t SELECT! ************')
        # 여기서 끝. 체크하고 있는 말 공격 불가
        
    else:
        # 이동 후를 가정해주는 함수 if_move(be_x, be_y, af_x, af_y) 필요함.
        # chess_table[be_x, be_y]의 값을 af_x, af_y로 '공격'한 후의 상황을 가정해줌.
        for range in can_range:
            range_x, range_y = range
            range_x, range_y = table_to_code(range_x, range_y)
            if_move(piece, range_x, range_y, king_x, king_y)
        # 위 코드는 ca
        after_checking_list = who_is_check(king_x, king_y)
        if after_checking_list:
            print(f'********** 1-1) This piece can\'t SELECT! ************')
            # 여기서 끝. 체크하고 있는 말 공격 후 체크됨.

        else:
            print(f'********** 1) It can ATTACK!************')


def if_move(piece, att_x, att_y, king_x, king_y):

    t_be_x, t_be_y = piece.location
    t_att_x, t_att_y = code_to_table(att_x, att_y)
    attack_piece = find_piece(t_att_x, t_att_y)

    if attack_piece is not None:
        # 가상 상황 설정
        print(f'{t_be_x, t_be_y} | {t_att_x, t_att_y}')
        piece.location = attack_piece.location
        attack_piece.die()

        print(f'fff{chess_table[att_y][att_x]}')
        checking_list = who_is_check(king_x, king_y)
        if checking_list is []:
            print('움직이고 난 후, 체크가 안되네요!')
        else:
            print('움직이고 난 후, 체크가 되네요!')
        print(attack_piece.is_dying)
        print(checking_list)

        # 원상복구
        piece.location = [t_be_x, t_be_y]
        attack_piece.is_dying = False
        attack_piece.location = [t_att_x, t_att_y]


def get_att_range(piece):
    return color_add(piece, False, False, True)


def who_is_check(king_x, king_y):
    checking_list = []

    # e_a_a checking
    i = -1  #
    for enemy in enemy_attack_all:  #
        i += 1  #

        for enemy_info in enemy:  #
            if enemy_info is None:  #
                continue  #

            enemy_x, enemy_y, enemy_body = enemy_info
            enemy_att = [enemy_x, enemy_y]

            if enemy_att == [king_x, king_y]:  #
                if enemy_body not in checking_list:
                    checking_list.append(enemy_body)

    return checking_list


def list_del(lists):
    for i in range(len(lists)):
        lists.pop()


# 적 piece가 움직였을 때, 상대 왕을 체크 시킬 수 있나?
def is_check(piece):
    color_add(piece, True, False, False)
    if piece.team:
        king = '♛'
        teams = white
    else:
        king = '♕'
        teams = black
    for i in check_list:
        x, y = i
        if chess_table[y][x] == king:
            print(f'\x1b[0;31;0m{teams}\'s King Checked by {teams} team\'s {piece.species} {piece.location}\x1b[0m')


def chess():
    global game_end
    global white
    global black
    global colors

    print(f'CutyApple\'s Chess!')
    white = input('Input the name of Team BOTTOM : ')
    black = input('Input the name of Team TOP : ')

    set_table()
    print_table(colors)

    while not game_end:
        pawn_turn()
        turn_start()
        print_table(colors)
        # color_del()


def pawn_turn():
    for i in pawn_list:
        i.turn += 1


def turn_start():
    global turn

    enpassant_del()
    color_del()

    for i in range(0, len(colors)):
        colors.pop()

    input_x, input_y = inputing('select your piece : ')
    selecting(input_x, input_y)
    turn = not turn


###########################################################
# Below this line is the 『main function』.


chess()

# 너무 하드코딩 아닌가?
