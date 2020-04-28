import numpy as np

# 활성화 함수 레이어
class SigmoidLayer:
    def __init__(self):
        self.out = None

    def frontward(self, x):
        self.out = 1/(1+np.exp(-x))
        return self.out

    def backward(self, dout):
        return dout * self.out * (1 - self.out)


class ReLuLayer:
    def __init__(self):
        self.mask = None

    def frontward(self, x):
        self.mask = (x <= 0)
        out = x.copy
        out[self.mask] = 0
        return out

    def backward(self, dout):
        dout[self.mask] = 0
        dx = dout
        return dx

# 곱셈 덧셈 레이어
class MulLayer:
    def frontward(self, a, b):
        self.a = a
        self.b = b
        return a * b

    def backward(self, dout):
        da = dout * self.b
        db = dout * self.a
        return da, db


class AddLayer:
    @staticmethod
    def frontward(a, b):
        return a + b

    @staticmethod
    def backward(dout):
        return dout

