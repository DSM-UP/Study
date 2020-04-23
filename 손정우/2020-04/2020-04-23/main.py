import numpy as np


class TwoLayerNet:
    def __init__(self, input_size, hidden_size, outpu_size, weight_init_std = 0.01):
        self.params = dict()
        self.params['W1'] = weight_init_std * np.random.randn(input_size, hidden_size)
        self.params['b1'] = weight_init_std * np.random.randn(hidden_size)

        self.params['W2'] = weight_init_std * np.random.randn(hidden_size, outpu_size)
        self.params['b2'] = weight_init_std * np.random.randn(outpu_size)

    def predict(self, x):
        W1, W2 = self.params['W1'], self.params['W2']
        b1, b2 = self.params['b1'], self.params['b2']

        a1 = np.dot(x, W1) + b1
        z1 = sigmoid(a1)
        a2 = np.dot(z1, W2) + b1
        z1 = sigmoid(a2)
        y = softmax(z1)

        return y

    def loss(self, x, t):
        y = self.predict(x)

        return cross_entropy_error(y)

    def accuracy(self, x, t):
        y = self.predict(x)
        y = np.argmax(y, axis=1)
        t = np.argmax(t, axis=1)

        accuracy = np.sum(y == t) / float(x.shape[0])

        return accuracy

    def numerical_gradient(self, x, t):
        loss_W = lambda W: self.loss(x, t)

        grads = {}
        grads['W1'] = numerical_gradient(loss_W, self.params['W1'])
        grads['W2'] = numerical_gradient(loss_W, self.params['W1'])
        grads['b1'] = numerical_gradient(loss_W, self.params['W1'])
        grads['b2'] = numerical_gradient(loss_W, self.params['W1'])

        return grads


def numerical_gradient(f, x):
    h = 1e-4 # 무한소 대용
    grad = np.zeros_like(x)

    for idx in range(x.size):
        tmp_val = x[idx]

        x[idx] = tmp_val + h
        fxh1 = f(x)

        x[idx] = tmp_val + h
        fxh2 = f(x)

        grad[idx] = (fxh1 - fxh2) / (2 * h)
        x[idx] = tmp_val

    return grad


def cross_entropy_error(y, t):
    if y.ndim == 1:
        t = t.reshape(1, t.size)
        y = y.reshape(1, y.shape)

    batch_size = y.shape[0]

    return -np.sum(t * np.log(y + 1e-7)) / batch_size


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


def init_network():
    network = dict()
    network['W!'] = np.array([[], []])
    network['b1'] = np.array([])
    network['W2'] = np.array([[], []])
    network['b2'] = np.array([])
    network['W3'] = np.array([[], []])
    network['b3'] = np.array([])

    return network


def softmax(a):
    c = np.max(a)
    exp_a = np.exp(a - c)
    sum_exp_a = np.sum(exp_a)
    y = exp_a / sum_exp_a

    return y
