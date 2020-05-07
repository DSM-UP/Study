from my_math import *
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

    def forward(self, x):
        self.mask = (x <= 0)
        out = x.copy()
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


class AffineLayer:
    def __init__(self, W, b):
        self.W = W
        self.b = b
        self.x = None
        self.dW = None
        self.db = None

    def forward(self, x):
        self.x = x
        out = np.dot(self.x, self.W) + self.b

        return out

    def backward(self, dout):
        dx = np.dot(dout, self.W.T)
        self.dW = np.dot(self.x.T, dout)
        self.db = np.sum(dout, axis=0)

        return dx


class SoftmaxWithLoss:
    def __init__(self):
        self.loss = None
        self.y = None
        self.t = None

    def forward(self, x, t):
        self.t = t
        self.y = softmax(x)
        self.loss = cross_entropy_error(self.y, self.t)
        return self.loss

    def backward(self, dout = 1):
        batch_size = self.t.shape[0]
        dx = (self.y - self.t) / batch_size

        return dx 
